import { Club } from "@/playing/domain/entities/Club";
import { ClubCollection, ClubSearchConfig, IClubRepo, Role } from "./ClubRepository";

// o nome não precisa ter a referencia ao ORM, eu só deixei pra clarificar
// Aqui, eu uso o Prisma pra fazer o que cada método pede
export class PrismaClubRepo implements IClubRepo {
  private prismaModels: any;

  constructor (prismaModels: any) {
    this.prismaModels = prismaModels;
  }
  
  delete(t: Club): Promise<any> {
    throw new Error("Method not implemented.");
  }

  exists (club: Club): Promise<boolean> {
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

  getClubById(clubId: string): Promise<any> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }

  save(club: Club): Promise<Club> {
    // implement specific algorithm using prisma orm
    return new Promise(() => true)
  }
}