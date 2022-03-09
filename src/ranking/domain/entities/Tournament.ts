import { Result } from "@shared/error/Result";
import { ITournamentProps } from "@ranking/types/TournamentType";
import { Entity } from "@shared/models/Entity";

export class Tournament extends Entity<ITournamentProps> {
  static props: ITournamentProps;
  
  private constructor(props: ITournamentProps) {
    super(props);
    this.props = props
  }

  // just example
  public static createTournament(id: string, name: string): Result<Tournament> {
    if (!id || !name) return Result.fail<Tournament>('ID or name is invalid.')

    return Result.ok<Tournament>(new Tournament(this.props))
  }
}