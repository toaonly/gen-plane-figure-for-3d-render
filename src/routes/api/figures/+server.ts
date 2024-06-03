import { json } from '@sveltejs/kit'
import { supabase } from '$lib'
import type { RequestHandler } from './$types'
import type { Figure } from '../../../app'

export const GET: RequestHandler = async () => {
  const { data, error } = await supabase.from('my_figures').select('*')

  if (error) {
    console.error('Error fetching data:', error)
  } else {
    return json(data as Figure[])
  }
}
