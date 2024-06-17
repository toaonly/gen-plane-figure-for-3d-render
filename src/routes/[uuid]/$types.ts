export type PageData = {}

export type PageLoad = (args: {
  params: { uuid: string }
  // data: { random: number }
}) => PageData

export type PageLoadServer = (args: {
  params: { uuid: string }
  fetch: Window['fetch']
}) => Promise<{}>
