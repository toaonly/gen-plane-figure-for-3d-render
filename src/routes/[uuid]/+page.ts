import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
  return {
    uuid: params.uuid,
  }

  // error(404, 'Not found')
}
