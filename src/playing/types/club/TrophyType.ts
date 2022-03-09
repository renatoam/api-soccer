type ScopeType = 'state' | 'regional' | 'national' | 'continental' | 'mondial' | 'other'

export type Trophies = {
  trophies: Trophy[]
  total: number
}

export interface Trophy {
  description: string
  quantity: number
  scope: ScopeType
}
