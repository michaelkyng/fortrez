// src/composables/useHashConnect.ts
import { ref } from 'vue';

// Only import types, not classes that cause conflicts
interface SessionData {
  accountIds: string[];
  [key: string]: any;
}

interface HashConnectConnectionState {
  [key: string]: any;
}

interface TransactionResult {
  transactionId: string;
  receipt: any;
  status: string;
}

interface AppMetadata {
  name: string;
  description: string;
  icons: string[];
  url: string;
}

export function useHashConnect() {
  const hashconnect = ref<any>(null);
  const pairingData = ref<SessionData | null>(null);
  const connectionState = ref<HashConnectConnectionState | null>(null);
  const accounts = ref<string[]>([]);

  const appMetadata: AppMetadata = {
    name: 'Fortrez',
    description: 'Fortrez donations using Hedera Hashgraph',
    icons: ['https://yourdomain.com/icon.png'],
    url: 'https://yourdomain.com'
  };

  async function init(projectId = '', network: 'testnet' | 'mainnet' = 'testnet'): Promise<void> {
    try {
      // Dynamically import to avoid type conflicts
      const { HashConnect } = await import('hashconnect');
      const { LedgerId } = await import('@hashgraph/sdk');
      
      const net = network === 'mainnet' ? LedgerId.MAINNET : LedgerId.TESTNET;
      hashconnect.value = new HashConnect(net, projectId, appMetadata, true);

      hashconnect.value.pairingEvent.on((pairing: any) => {
        pairingData.value = pairing;
        accounts.value = pairing.accountIds || [];
      });

      hashconnect.value.disconnectionEvent.on(() => {
        pairingData.value = null;
        accounts.value = [];
      });

      hashconnect.value.connectionStatusChangeEvent.on((st: any) => {
        connectionState.value = st;
      });

      await hashconnect.value.init();
    } catch (error) {
      console.error('Failed to initialize HashConnect:', error);
      throw error;
    }
  }

  function openPairingModal(): void {
    if (!hashconnect.value) throw new Error('HashConnect not initialized');
    setTimeout(() => {
      if (hashconnect.value) {
        hashconnect.value.openPairingModal();
      }
    }, 300);
  }

  function getAccountIds(): string[] {
    return accounts.value;
  }

  function isPaired(): boolean {
    return !!(pairingData.value && accounts.value.length > 0);
  }

  function getSigner(accountId: string) {
    if (!hashconnect.value) throw new Error('HashConnect not initialized');
    return hashconnect.value.getSigner(accountId);
  }

  async function sendHbarFrom(
    accountId: string, 
    toAccount: string, 
    amountHbar: string
  ): Promise<TransactionResult> {
    if (!hashconnect.value) throw new Error('HashConnect not initialized');
    if (!isPaired()) throw new Error('Wallet not paired');

    try {
      // Import from @hashgraph/sdk directly
      const { TransferTransaction, Hbar } = await import('@hashgraph/sdk');
      
      const signer = hashconnect.value.getSigner(accountId);
      
      const tx = new TransferTransaction()
        .addHbarTransfer(accountId, Hbar.fromString(`-${amountHbar}`))
        .addHbarTransfer(toAccount, Hbar.fromString(`${amountHbar}`));

      const frozenTx = await tx.freezeWithSigner(signer);
      const response = await frozenTx.executeWithSigner(signer);
      const receipt = await response.getReceiptWithSigner(signer);
      
      return { 
        transactionId: response.transactionId?.toString() || '', 
        receipt,
        status: receipt.status?.toString() || 'UNKNOWN'
      };
    } catch (sdkError) {
      console.warn('SDK import failed, trying alternative approach:', sdkError);
      
      // Fallback: use HashConnect's transaction methods
      try {
        const result = await hashconnect.value.sendTransaction(accountId, {
          type: 'CRYPTOTRANSFER',
          transfers: [
            {
              accountId: accountId,
              amount: -parseFloat(amountHbar) * 100000000 // negative for sender
            },
            {
              accountId: toAccount, 
              amount: parseFloat(amountHbar) * 100000000 // positive for receiver
            }
          ]
        });
        
        return {
          transactionId: result.response?.transactionId?.toString() || '',
          receipt: result.receipt || {},
          status: result.receipt?.status?.toString() || 'SUCCESS'
        };
      } catch (fallbackError) {
        console.error('Both SDK and fallback methods failed:', fallbackError);
        throw fallbackError;
      }
    }
  }

  function disconnect(): void {
    if (hashconnect.value) {
      hashconnect.value.disconnect();
      hashconnect.value = null;
      pairingData.value = null;
      connectionState.value = null;
      accounts.value = [];
    }
  }

  return {
    init,
    openPairingModal,
    disconnect,
    pairingData,
    connectionState,
    getAccountIds,
    isPaired,
    getSigner,
    sendHbarFrom
  };
}