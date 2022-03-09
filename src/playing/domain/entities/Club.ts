import { Result } from "@/shared/error/Result";
import { IClubProps } from "../../../shared/types/club/ClubType";
import { Entity } from "../../../auth/domain/entities/Entity";

export class Club extends Entity<IClubProps> {
  static props: IClubProps;
  
  private constructor(props: IClubProps) {
    super(props);
    this.props = props
  }

  // just example
  public static createClub(id: string, name: string): Result<Club> {
    if (!id || !name) return Result.fail<Club>('ID or name is invalid.')

    return Result.ok<Club>(new Club(this.props))
  }
}