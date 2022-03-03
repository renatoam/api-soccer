import { Position } from "./PositionType"
import { Trophies } from "./TrophyType";

export interface Legend<T = {}> {
  name: string
  avatar: string
  description: string
  trophies: {
    compare: boolean
    quantity: number
  }
  caps: {
    compare: boolean
    quantity: number
  }
  position: {
    compare: boolean
    attributes: Position<T>
  }
}

export interface Stadium {
  name: string
  capacity: {
    compare: boolean
    quantity: number
  }
  nickname: string
  foundation: number
  locale: string
}

export interface Stats {
  fansInMillions?: {
    compare: boolean
    quantity: number
  }
  goals?: {
    compare: boolean
    quantity: number
  }
  wins?: {
    compare: boolean
    quantity: number
  }
  defeats?: {
    compare: boolean
    quantity: number
  }
}

export interface Comparables {
  legends: Legend[]
  trophies: Trophies
  stadium: Stadium
  stats: Stats
}