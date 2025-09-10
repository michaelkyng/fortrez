import { defineStore } from 'pinia'
import type { BaseSchema, Donation, User } from '~/types/type';

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
  featuredCampaigns: Campaign[];
  otherCampaigns: Campaign[];
  currentCampaign: Campaign | null;
  loading: boolean;
  error: string | null;
}

export interface PopulatedCampaign extends Omit<Campaign, 'donations' | 'authorId'> {
  donations: Donation[];
  author: User; 
}

export const useCampaignStore = defineStore('campaign', {
  state: (): CampaignState => ({
    campaigns: [],
    featuredCampaigns: [],
    otherCampaigns: [],
    currentCampaign: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchCampaigns(params: Record<string, any> = {}) {
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
          this.campaigns = data.value.data as Campaign[]
        }
        return data.value?.data || []
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error fetching projects:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async fetchFeaturedCampaigns() {
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign[] }>('/api/campaigns/featured', {
          headers: {
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.featuredCampaigns = data.value.data as Campaign[]
        }
        return data.value?.data || []
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error fetching featured projects:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async fetchOtherCampaigns() {
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign[] }>('/api/campaigns/other', {
          headers: {
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.otherCampaigns = data.value.data as Campaign[]
        }
        return data.value?.data || []
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error fetching other projects:', error)
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
    
    async createCampaign(campaignData: Omit<Partial<Campaign>, 'id'>) {
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign }>('/api/campaigns', {
          method: 'POST',
          body: JSON.stringify(campaignData),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          this.campaigns.unshift(data.value.data)
          return data.value.data
        }
        return null
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error('Error creating project:', error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async updateCampaign(id: string, updates: Omit<Partial<Campaign>, 'id'>) {
      this.loading = true
      this.error = null
      try {
        const { data } = await useFetch<{ data: Campaign }>(`/api/campaigns/${id}`, {
          method: 'POST',
          body: JSON.stringify(updates),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        if (data.value) {
          const index = this.campaigns.findIndex(c => c.id === id)
          if (index !== -1) {
            const updatedCampaign = { ...this.campaigns[index], ...updates, updatedAt: new Date() }
            this.campaigns[index] = updatedCampaign as Campaign
          }
          if (this.currentCampaign?.id === id) {
            this.currentCampaign = { ...this.currentCampaign, ...updates, updatedAt: new Date() } as Campaign
          }
          return data.value.data
        }
        return null
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error(`Error updating project ${id}:`, error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async deleteCampaign(id: string) {
      this.loading = true
      this.error = null
      try {
        await useFetch(`/api/campaigns/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json'
          }
        })
        this.campaigns = this.campaigns.filter(c => c.id !== id)
        if (this.currentCampaign?.id === id) {
          this.currentCampaign = null
        }
        return true
      } catch (error) {
        this.error = error instanceof Error ? error.message : String(error)
        console.error(`Error deleting campaign ${id}:`, error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    clearCurrentCampaign() {
      this.currentCampaign = null
    },
    
    clearError() {
      this.error = null
    }
  },
  
  getters: {
    getCampaignById: (state: CampaignState) => (id: string) => {
      return state.campaigns.find(campaign => campaign.id === id)
    },
    getCampaignsByCategory: (state: CampaignState) => (category: string) => {
      return state.campaigns.filter(campaign => campaign.category === category)
    },
  }
})
