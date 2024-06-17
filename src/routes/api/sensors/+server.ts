import { json } from '@sveltejs/kit'
import { supabase } from '../../../lib'
import type { RequestHandler } from './$types'
import type { Figure } from '../../../app'

export const GET: RequestHandler = async params => {
  const figureId = params.uuid

  const { data, error } = await supabase
    .from('my_figure_sensor_assocs')
    .select('*')
    .eq('figure', figureId)
  const figure: Figure | null = data?.[0] ?? null

  if (!figure || error) {
    console.error('Error fetching data:', error)
  } else {
    const { data, error } = await supabase.from('my_sensors').select('*')

    if (error) {
      console.error('Error fetching data:', error)
    } else {
      return json(data as any[])
    }
  }
}
