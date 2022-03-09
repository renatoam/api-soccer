export type Goalkeeper = {
  aerial: number
  agility: number
  handling: number
  reflexes: number
  elasticity: number
}

export type CentreBack = {
  heading: number
  tackle: number
  marking: number
  decision: number
  positioning: number
}

export type SideBack = {
  crossing: number
  tackle: number
  marking: number
  positioning: number
  stamina: number
}

export type DefensiveMidfielder = {
  aggression: number
  tackle: number
  marking: number
  passing: number
  stamina: number
}

export type Midfielder = {
  passing: number
  vision: number
  decision: number
  positioning: number
  technique: number
}

export type Winger = {
  speed: number
  crossing: number
  dribbling: number
  shooting: number
  movement: number
}

export type Forward = {
  shooting: number
  heading: number
  positioning: number
  movement: number
  technique: number
}

export interface Position<T> {
  description: string
  attributes: T | {}
}