export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

// See the 'npm run dev' output or verify in sanity.io/manage
if (!projectId) {
  console.warn(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables. Add it to .env.local to enable Sanity Studio'
  )
}
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-14'
