import { Comparables } from "./ComparablesType";

export interface IClubProps {
  id: string
  name: string
  crest: string
  nickname?: string
  mascot?: string
  mascotImage?: string
  country: string
  locale?: string
  foundation: string
  site?: string
  history: string
  comparables: Comparables
}
