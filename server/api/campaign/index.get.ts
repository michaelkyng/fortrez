const config = useRuntimeConfig()
import type { Campaign } from '~/types/type'

export default defineEventHandler(async (event) => {
  try {
    const campaigns = await $fetch<Campaign[]>(`${config.public.apiBaseUrl}/campaigns`, {
      headers: { Accept: 'application/json' }
    })
    return campaigns
  } catch (err) {
    console.error('API proxy error (campaigns):', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch campaigns' })
  }
})
