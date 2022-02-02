import { Club } from "@/domain/entities/Club";

// Isso não vem do exemplo, é provisório
export type ClubCollection = Club[]
export type ClubSearchConfig = any
export type Role = 'a' | 'b'

export interface IClubRepo {
  exists(clubId: string): Promise<boolean>;
  searchClubsByEmail(email: string): Promise<ClubCollection>;
  getClubs(config: ClubSearchConfig): Promise<ClubCollection>;
  getClubsByRole(config: ClubSearchConfig, role: Role): Promise<ClubCollection>;
  getClub(clubId: string): Promise<any>;
  save(club: Club): Promise<Club>;
}