import { Position } from "./PositionType"
import { Trophies } from "./TrophyType";

export interface Legend<T = {}> {
  name: string
  avatar: string
  description: string
  trophies: number
  caps: number
  position: Position<T>
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

export interface Comparables {
  legends: Legend[]
  trophies: Trophies
  stadium: Stadium
  stats: Stats
}