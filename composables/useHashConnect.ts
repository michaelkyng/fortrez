// src/composables/useHashConnect.ts
import { ref } from 'vue';
import type { SessionData } from 'hashconnect';
import { HashConnect, HashConnectConnectionState } from 'hashconnect';
import { LedgerId, AccountId, TransferTransaction, Hbar } from '@hashgraph/sdk';

export function useHashConnect() {
  const hashconnect = ref<HashConnect | null>(null);
  const pairingData = ref<SessionData | null>(null);
  const connectionState = ref<HashConnectConnectionState | null>(null);
  const accounts = ref<string[]>([]); // accountIds when paired

  // Minimal app metadata shown to the wallet during pairing
  const appMetadata = {
    name: 'Fortrez',
    description: 'Fortrez donations using Hedera Hashgraph',
    icons: ['https://yourdomain.com/icon.png'],
    url: 'https://yourdomain.com'
  };

  async function init(projectId = '', network: 'testnet' | 'mainnet' = 'testnet') {
    try {
      // Create and initialize HashConnect. Supply the LedgerId and projectId.
      const net = network === 'mainnet' ? LedgerId.MAINNET : LedgerId.TESTNET;
      hashconnect.value = new HashConnect(net, projectId, appMetadata, true);

      // register events before init (docs recommend this)
      hashconnect.value.pairingEvent.on((pairing) => {
        pairingData.value = pairing;
        accounts.value = pairing.accountIds || [];
      });

      hashconnect.value.disconnectionEvent.on(() => {
        pairingData.value = null;
        accounts.value = [];
      });

      hashconnect.value.connectionStatusChangeEvent.on((st) => {
        connectionState.value = st;
      });

      // initialize (this will detect extension and setup Relay)
      await hashconnect.value.init();

      // NOTE: on first-time connect you will present the pairing QR / open modal
    } catch (error) {
      console.error('Failed to initialize HashConnect:', error);
      throw error;
    }
  }

  function openPairingModal() {
    if (!hashconnect.value) throw new Error('HashConnect not initialized');
    // open pairing UI (extension popup or QR)
    // small delay sometimes fixes extension initialization race conditions
    setTimeout(() => {
      if (hashconnect.value) {
        hashconnect.value.openPairingModal();
      }
    }, 300);
  }

  function getAccountIds() {
    return accounts.value;
  }

  function isPaired() {
    return !!(pairingData.value && accounts.value.length > 0);
  }

  // get a signer object for the given accountId (string like '0.0.1234')
  function getSigner(accountId: string) {
    if (!hashconnect.value) throw new Error('HashConnect not initialized');
    return hashconnect.value.getSigner(AccountId.fromString(accountId));
  }

  // example: create and send a simple HBAR transfer from the connected account
  // NOTE: call this from an async handler in your component
  async function sendHbarFrom(accountId: string, toAccount: string, amountHbar: string) {
    if (!hashconnect.value) throw new Error('HashConnect not initialized');
    if (!isPaired()) throw new Error('Wallet not paired');

    try {
      const signer = hashconnect.value.getSigner(AccountId.fromString(accountId));
      
      // build the transfer transaction
      const tx = new TransferTransaction()
        .addHbarTransfer(AccountId.fromString(accountId), Hbar.fromString(`-${amountHbar}`))
        .addHbarTransfer(AccountId.fromString(toAccount), Hbar.fromString(`${amountHbar}`));

      // freeze with signer
      const frozenTx = await tx.freezeWithSigner(signer);

      // execute the transaction with signer - this will prompt the wallet for approval
      const response = await frozenTx.executeWithSigner(signer);
      
      // get the receipt (confirmed)
      const receipt = await response.getReceiptWithSigner(signer);
      
      return { 
        transactionId: response.transactionId?.toString() || '', 
        receipt,
        status: receipt.status.toString()
      };
    } catch (error) {
      console.error('Transaction failed:', error);
      throw error;
    }
  }

  // Cleanup function to disconnect when component unmounts
  function disconnect() {
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