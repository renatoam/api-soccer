type Goalkeeper = {
  aerial: number
  agility: number
  handling: number
  reflexes: number
  elasticity: number
}

export interface Position<T> {
  description: string
  attributes: T | {}
}