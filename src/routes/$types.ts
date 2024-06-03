import type { Figure } from '../app'

export type PageData = {
  data: Figure[]
}

export type PageLoad = (args: { data: Figure[] }) => PageData

export type PageLoadServer = (args: { fetch: Window['fetch'] }) => Promise<{
  data: Figure[]
}>
