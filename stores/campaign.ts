import { defineStore } from 'pinia'
import type { BaseSchema, Donation, User } from '~/types/type';

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000

enum CampaignStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  FUNDED = 'funded',
  FAILED = 'failed'
}

enum CampaignType {
  FOUNDATION = 'foundation',
  CREATOR = 'creator'
}

enum CampaignCategory {
  ENVIRONMENT = 'environment',
  SOCIAL = 'social',
  EDUCATION = 'education',
  HEALTH = 'health',
  ANIMAL = 'animal',
  PERSONAL = 'personal',
  EMPOWERMENT = 'empowerment',
  COMMUNITY = 'community',
  CHARITY = 'charity'
}



// Deadline interface for Campaign
interface Deadline {
  date: Date | null;
  hasDeadline: boolean;
}

// Campaign interface
export interface Campaign extends BaseSchema {
  title: string;
  description: string;
  problem: string;
  solutions: string[];
  target: number;
  raisedAmount: number;
  donations: string[]; // Array of Donation IDs
  deadline: Deadline;
  coverImage: string;
  status: CampaignStatus;
  category: CampaignCategory;
  type: CampaignType;
  authorId: string; // User ID reference
}

interface CampaignState {
  campaigns: Campaign[];
  fortrezCampaigns: Campaign[];
  otherCampaigns: Campaign[];
  currentCampaign: Campaign | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
  lastFetchedFortrez: number | null;
  lastFetchedOther: number | null;
}

export interface PopulatedCampaign extends Omit<Campaign, 'donations' | 'authorId'> {
  donations: Donation[];
  author: User; 
}

export const useCampaignStore = defineStore('campaign', {
  state: (): CampaignState => ({
    campaigns: [],
    fortrezCampaigns: [],
    otherCampaigns: [],
    currentCampaign: null,
    loading: false,
    error: null,
    lastFetched: null,
    lastFetchedFortrez: null,
    lastFetchedOther: null
  }),
  
  actions: {
    setCampaigns(campaigns: Campaign[]) {
      // Convert string dates to Date objects
      this.campaigns = campaigns.map(campaign => ({
        ...campaign,
        createdAt: new Date(campaign.createdAt),
        updatedAt: new Date(campaign.updatedAt),
        deadline: {
          ...campaign.deadline,
          date: campaign.deadline.date ? new Date(campaign.deadline.date) : null
        }
      }))
      this.lastFetched = Date.now()
    },

    setFortrezCampaigns(campaigns: Campaign[]) {
      this.fortrezCampaigns = campaigns.map(campaign => ({
        ...campaign,
        createdAt: new Date(campaign.createdAt),
        updatedAt: new Date(campaign.updatedAt),
        deadline: {
          ...campaign.deadline,
          date: campaign.deadline.date ? new Date(campaign.deadline.date) : null
        }
      }))
      this.lastFetchedFortrez = Date.now()
    },

    setOtherCampaigns(campaigns: Campaign[]) {
      this.otherCampaigns = campaigns.map(campaign => ({
        ...campaign,
        createdAt: new Date(campaign.createdAt),
        updatedAt: new Date(campaign.updatedAt),
        deadline: {
          ...campaign.deadline,
          date: campaign.deadline.date ? new Date(campaign.deadline.date) : null
        }
      }))
      this.lastFetchedOther = Date.now()
    },

    shouldFetchCampaigns(): boolean {
      if (!this.campaigns.length || !this.lastFetched) {
        return true
      }
      return (Date.now() - this.lastFetched) > CACHE_DURATION
    },

    shouldFetchFortrezCampaigns(): boolean {
      if (!this.fortrezCampaigns.length || !this.lastFetchedFortrez) {
        return true
      }
      return (Date.now() - this.lastFetchedFortrez) > CACHE_DURATION
    },

    shouldFetchOtherCampaigns(): boolean {
      if (!this.otherCampaigns.length || !this.lastFetchedOther) {
        return true
      }
      return (Date.now() - this.lastFetchedOther) > CACHE_DURATION
    },

    async fetchCampaigns(params: Record<string, any> = {}, force = false) {
      if (!force && !this.shouldFetchCampaigns()) {
        console.log('Using cached campaigns:', this.campaigns.length)
        return this.campaigns
      }

      console.log('Fetching fresh campaigns...')
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign[] }>('/api/campaigns', {
          params,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.setCampaigns(data.value.data as Campaign[])
          console.log('Fetched campaigns:', data.value.data.length)
          return data.value.data
        }
        return []
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error fetching campaigns:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async fetchFortrezCampaigns(force = false) {
      if (!force && !this.shouldFetchFortrezCampaigns()) {
        console.log('Using cached Fortrez campaigns:', this.fortrezCampaigns.length)
        return this.fortrezCampaigns
      }

      console.log('Fetching fresh Fortrez campaigns...')
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign[] }>('/api/campaigns/featured', {
          headers: {
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.setFortrezCampaigns(data.value.data as Campaign[])
          console.log('Fetched Fortrez campaigns:', data.value.data.length)
          return data.value.data
        }
        return []
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error fetching Fortrez campaigns:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async fetchOtherCampaigns(force = false) {
      if (!force && !this.shouldFetchOtherCampaigns()) {
        console.log('Using cached other campaigns:', this.otherCampaigns.length)
        return this.otherCampaigns
      }

      console.log('Fetching fresh other campaigns...')
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign[] }>('/api/campaigns/other', {
          headers: {
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.setOtherCampaigns(data.value.data as Campaign[])
          console.log('Fetched other campaigns:', data.value.data.length)
          return data.value.data
        }
        return []
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error fetching other campaigns:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async fetchCampaignById(id: string) {
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign }>(`/api/campaigns/${id}`, {
          headers: {
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.currentCampaign = data.value.data as Campaign
        }
        return data.value?.data || null
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error(`Error fetching project ${id}:`, error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    // async createCampaign(campaignData: Omit<Partial<Campaign>, 'id'>) {
    //   this.loading = true
    //   this.error = null
    //   try {
    //     const { data } = await useFetch<{ data: Campaign }>('/api/campaigns', {
    //       method: 'POST',
    //       body: JSON.stringify(campaignData),
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //       }
    //     })
    //     if (data.value) {
    //       this.campaigns.unshift(data.value.data)
    //       return data.value.data
    //     }
    //     return null
    //   } catch (error) {
    //     this.error = error instanceof Error ? error.message : String(error)
    //     console.error('Error creating project:', error)
    //     throw error
    //   } finally {
    //     this.loading = false
    //   }
    // },
    
    // async updateCampaign(id: string, updates: Omit<Partial<Campaign>, 'id'>) {
    //   this.loading = true
    //   this.error = null
    //   try {
    //     const { data } = await useFetch<{ data: Campaign }>(`/api/campaigns/${id}`, {
    //       method: 'POST',
    //       body: JSON.stringify(updates),
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //       }
    //     })
    //     if (data.value) {
    //       const index = this.campaigns.findIndex(c => c.id === id)
    //       if (index !== -1) {
    //         const updatedCampaign = { ...this.campaigns[index], ...updates, updatedAt: new Date() }
    //         this.campaigns[index] = updatedCampaign as Campaign
    //       }
    //       if (this.currentCampaign?.id === id) {
    //         this.currentCampaign = { ...this.currentCampaign, ...updates, updatedAt: new Date() } as Campaign
    //       }
    //       return data.value.data
    //     }
    //     return null
    //   } catch (error) {
    //     this.error = error instanceof Error ? error.message : String(error)
    //     console.error(`Error updating project ${id}:`, error)
    //     throw error
    //   } finally {
    //     this.loading = false
    //   }
    // },
    
    // async deleteCampaign(id: string) {
    //   this.loading = true
    //   this.error = null
    //   try {
    //     await useFetch(`/api/campaigns/${id}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Accept': 'application/json'
    //       }
    //     })
    //     this.campaigns = this.campaigns.filter(c => c.id !== id)
    //     if (this.currentCampaign?.id === id) {
    //       this.currentCampaign = null
    //     }
    //     return true
    //   } catch (error) {
    //     this.error = error instanceof Error ? error.message : String(error)
    //     console.error(`Error deleting campaign ${id}:`, error)
    //     throw error
    //   } finally {
    //     this.loading = false
    //   }
    // },
    
    clearCurrentCampaign() {
      this.currentCampaign = null
    },
    
    clearError() {
      this.error = null
    },

    clearCache() {
      this.campaigns = []
      this.fortrezCampaigns = []
      this.otherCampaigns = []
      this.lastFetched = null
      this.lastFetchedFortrez = null
      this.lastFetchedOther = null
    },

    reset() {
      this.campaigns = []
      this.fortrezCampaigns = []
      this.otherCampaigns = []
      this.currentCampaign = null
      this.loading = false
      this.error = null
      this.lastFetched = null
      this.lastFetchedFortrez = null
      this.lastFetchedOther = null
    }
  },
  
  getters: {
    getCampaignById: (state: CampaignState) => (id: string) => {
      return state.campaigns.find(campaign => campaign.id === id)
    },
    getCampaignsByCategory: (state: CampaignState) => (category: string) => {
      return state.campaigns.filter(campaign => campaign.category === category)
    },
  },
  persist: true
})
