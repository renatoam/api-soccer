import { Club } from "@/domain/entities/Club";
import { ClubCollection, ClubSearchConfig, IClubRepo, Role } from "../../shared/types/ClubRepository";


export class PrismaClubRepo implements IClubRepo {
  private prismaModels: any;

  constructor (prismaModels: any) {
    this.prismaModels = prismaModels;
  }

  exists (clubId: string): Promise<boolean> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }

  searchClubsByEmail(email: string): Promise<ClubCollection> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }

  getClubs (config: ClubSearchConfig): Promise<ClubCollection> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }

  getClubsByRole (
    config: ClubSearchConfig, 
    role: Role
  ): Promise<ClubCollection> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }

  getClub(clubId: string): Promise<any> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }

  save(club: Club): Promise<Club> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }
}