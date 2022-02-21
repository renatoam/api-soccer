import { Club } from "@/auth/domain/entities/Club"; 
import { Repo } from "./Repository";

// Isso não vem do exemplo, é provisório
export type ClubCollection = Club[]
export type ClubSearchConfig = any
export type Role = 'a' | 'b'

export interface IClubRepo extends Repo<Club> {
  searchClubsByEmail(email: string): Promise<ClubCollection>;
  getClubs(config: ClubSearchConfig): Promise<ClubCollection>;
  getClubsByRole(config: ClubSearchConfig, role: Role): Promise<ClubCollection>;
  getClubById(clubId: string): Promise<any>;
}