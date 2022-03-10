/**
 * @desc General application errors (few of these as possible)
 * @http 500
 */

import { DomainError } from "@shared/error/DomainError";
import { Result } from "@shared/core/Result";

 export namespace AppError {
  export class UnexpectedError extends Result<DomainError> {
    public constructor (err: any) {
      super(false, {
        message: `An unexpected error occurred.`,
        error: err
      })
    }

    public static create (err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
}