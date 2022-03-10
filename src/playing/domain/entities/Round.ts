import { Result } from "@shared/core/Result";
import { IRoundProps } from "@playing/types/RoundType";
import { Entity } from "@shared/domain/Entity";

export class Round extends Entity<IRoundProps> {
  static props: IRoundProps;
  
  private constructor(props: IRoundProps) {
    super(props);
    this.props = props
  }

  // just example
  public static createRound(id: string, name: string): Result<Round> {
    if (!id || !name) return Result.fail<Round>('ID or name is invalid.')

    return Result.ok<Round>(new Round(this.props))
  }
}