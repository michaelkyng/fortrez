const config = useRuntimeConfig()
import type { Blog } from '~/types/type'

export default defineEventHandler(async (event) => {
  try {
    const blogs = await $fetch<Blog[]>(`${config.public.apiBase}/blogs`, {
      headers: { Accept: 'application/json' }
    })
    return blogs
  } catch (err) {
    console.error('API proxy error (blogs):', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch blogs' })
  }
})
