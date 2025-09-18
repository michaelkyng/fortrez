import { defineStore } from 'pinia'
import type { BaseSchema } from '~/types/type'
import type { User } from '~/types/type'

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000

// Blog interface (based on actual structure)
export interface Blog extends BaseSchema {
  title: string;
  content: string;
  coverImage: string;
  authorId: string;
}

export interface PopulatedBlog extends Omit<Blog, 'authorId'> {
  authorId: User;
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [] as Blog[],
    currentBlog: null as Blog | null,
    latestBlog: null as Blog | null,
    loading: false,
    error: null as string | null,
    lastFetched: null as number | null
  }),

  getters: {

    getBlogs: (state: any) => {
      return state.blogs
    },

    getBlogById: (state) => (id: string) => {
      return state.blogs.find(blog => blog.id === id)
    },
    getBlogByTitle: (state) => (title: string) => {
      return state.blogs.find(blog => blog.title === title)
    },
    getBlogsByAuthor: (state) => (authorId: string) => {
      return state.blogs.filter(blog => blog.authorId === authorId)
    },
    getLatestBlog: (state) => {
      return state.latestBlog
    },
    getBlogsWithContent: (state) => {
      return state.blogs.filter(blog => blog.content !== null)
    }
  },

  actions: {
    setBlogs(blogs: any[]) {
      // Convert string dates to Date objects
      this.blogs = blogs.map(blog => ({
        ...blog,
        createdAt: new Date(blog.createdAt),
        updatedAt: new Date(blog.updatedAt)
      }))
      this.lastFetched = Date.now()
    },

    shouldFetchBlogs(): boolean {
      // Always fetch if no blogs or no timestamp
      if (!this.blogs.length || !this.lastFetched) {
        return true
      }
      // Check if cache is expired (5 minutes)
      return (Date.now() - this.lastFetched) > CACHE_DURATION
    },

    async fetchBlogs(force = false) {
      if (!force && !this.shouldFetchBlogs()) {
        console.log('Using cached blogs:', this.blogs.length)
        return this.blogs
      }

      console.log('Fetching fresh blogs...')
      this.setLoading(true)
      this.clearError()
      
      try {
        const { data, error } = await useFetch<Blog[]>('/api/blog')
        
        if (error.value) {
          throw new Error(error.value.message || 'Failed to fetch blogs')
        }
        
        if (data.value) {
          this.setBlogs(data.value)
          this.setLatestBlog(data.value[0] as Blog)
          console.log('Fetched blogs:', data.value.length)
          return data.value
        }
      } catch (err: any) {
        this.setError(err.message || 'Failed to fetch blogs')
        throw err
      } finally {
        this.setLoading(false)
      }
      
      return []
    },

    setLatestBlog(blog: Blog) {
      this.latestBlog = blog
    },

    addBlog(blog: Blog) {
      this.blogs.unshift(blog)
    },

    updateBlog(id: string, updates: Partial<Blog>) {
      const index = this.blogs.findIndex(blog => blog.id === id)
      if (index !== -1) {
        this.blogs[index] = { ...this.blogs[index], ...updates } as Blog
      }
      
      if (this.currentBlog?.id === id) {
        this.currentBlog = { ...this.currentBlog, ...updates } as Blog
      }
    },

    removeBlog(id: string) {
      this.blogs = this.blogs.filter(blog => blog.id !== id)
      
      if (this.currentBlog?.id === id) {
        this.currentBlog = null
      }
    },

    setCurrentBlog(blog: Blog | null) {
      this.currentBlog = blog
    },

    setLoading(loading: boolean) {
      this.loading = loading
    },

    setError(error: string | null) {
      this.error = error
    },

    clearError() {
      this.error = null
    },

    clearCurrentBlog() {
      this.currentBlog = null
    },

    clearCache() {
      this.blogs = []
      this.lastFetched = null
      this.latestBlog = null
    },

    reset() {
      this.blogs = []
      this.currentBlog = null
      this.loading = false
      this.error = null
      this.lastFetched = null
      this.latestBlog = null
    }
  },
  persist:true
})