// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}

export type Figure = {
  id: string
  name: string
  width?: number
  height?: number
  depth?: number
  x?: number
  y?: number
  z?: number
  created_at: string
  updated_at: string
}
