type ScopeType = 'state' | 'regional' | 'national' | 'continental' | 'mondial' | 'other'

export interface IClubProps {
  id: string
  name: string
  nickname?: string
  site?: string
  foundation: string
  country: string
  locale?: string
  mascot?: string
  history: string
}

export interface Legend {
  name: string
  position: string
  avatar: string
  description: string
}

export interface Tophies {
  description: string
  quantity: number
  scope: ScopeType
  total: number
}

export interface Stadium {
  name: string
  capacity: number
  nickname: string
  foundation: number
  locale: string
}

export interface Stats {
  fans?: string
  goals?: number
  wins?: number
  defeats?: number
}