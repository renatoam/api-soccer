import { Result } from "@shared/core/Result";
import { IGameProps } from "@playing/types/GameType";
import { Entity } from "@shared/domain/Entity";

export class Game extends Entity<IGameProps> {
  static props: IGameProps;
  
  private constructor(props: IGameProps) {
    super(props);
    this.props = props
  }

  // just example
  public static createGame(id: string, name: string): Result<Game> {
    if (!id || !name) return Result.fail<Game>('ID or name is invalid.')

    return Result.ok<Game>(new Game(this.props))
  }
}