import { Result } from "@shared/core/Result";
import { ILeaderboardProps } from "@ranking/types/LeaderboardType";
import { Entity } from "@shared/domain/Entity";

export class Leaderboard extends Entity<ILeaderboardProps> {
  static props: ILeaderboardProps;
  
  private constructor(props: ILeaderboardProps) {
    super(props);
    this.props = props
  }

  // just example
  public static createLeaderboard(id: string, name: string): Result<Leaderboard> {
    if (!id || !name) return Result.fail<Leaderboard>('ID or name is invalid.')

    return Result.ok<Leaderboard>(new Leaderboard(this.props))
  }
}