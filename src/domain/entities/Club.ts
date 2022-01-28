import { Club } from "../types/ClubModels";

export class ClubDomain implements Club {
  public readonly id: string;
  public readonly name: string;
  public readonly nickname?: string | undefined;
  public readonly site?: string | undefined;
  public readonly foundation: string;
  public readonly country: string;
  public readonly locale?: string | undefined;
  public readonly mascot?: string | undefined;
  public readonly history: string;
  
  constructor(club: Club) {
    this.id = club.id
    this.name = club.name
    this.nickname = club.nickname
    this.site = club.site
    this.foundation = club.foundation
    this.country = club.country
    this.locale = club.locale
    this.mascot = club.mascot
    this.history = club.history
  }

  async validateName() {
    return this.name && typeof this.name === 'string'
  }
}