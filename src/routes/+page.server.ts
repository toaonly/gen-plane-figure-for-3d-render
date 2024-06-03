import { PageLoadServer } from './$types'

export const load: PageLoadServer = async ({ fetch }) => {
  const data = await fetch('/api/figures').then(res => res.json())

  return {
    data,
  }
}
