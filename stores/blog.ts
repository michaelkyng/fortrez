import { defineStore } from 'pinia'
import type { BaseSchema } from '~/types/type'
import type { User } from '~/types/type'

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
    loading: false,
    error: null as string | null
  }),

  getters: {
    getBlogById: (state) => (id: string) => {
      return state.blogs.find(blog => blog.id === id)
    },
    getBlogByTitle: (state) => (title: string) => {
      return state.blogs.find(blog => blog.title === title)
    },
    getBlogsByAuthor: (state) => (authorId: string) => {
      return state.blogs.filter(blog => blog.authorId === authorId)
    },
    
    getBlogsWithContent: (state) => {
      return state.blogs.filter(blog => blog.content !== null)
    }
  },

  actions: {
    setBlogs(blogs: Blog[]) {
      this.blogs = blogs
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

    reset() {
      this.blogs = []
      this.currentBlog = null
      this.loading = false
      this.error = null
    }
  }
})