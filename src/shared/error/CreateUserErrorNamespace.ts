/**
 * @desc CreateUser errors
 */

 import { DomainError } from "@shared/models/DomainError";
 import { Result } from "./Result";

 export namespace CreateUserError {

  export class UsernameTakenError extends Result<DomainError> {    
    public constructor (username: string) {
      super(false, {
        message: `The username "${username}" has already been taken.`
      })
    }

    public static create (username: string): UsernameTakenError {
      return new UsernameTakenError(username);
    }
  }

  export class EmailInvalidError extends Result<DomainError> {    
    public constructor (email: string) {
      super(false, {
        message: `The email "${email}" is invalid.`
      })
    }

    public static create (email: string): EmailInvalidError {
      return new EmailInvalidError(email);
    }
  }

  export class AccountAlreadyExistsError extends Result<DomainError> {    
    public constructor () {
      super(false, {
        message: `The account associated with this email already exists.`
      })
    }

    public static create (): AccountAlreadyExistsError {
      return new AccountAlreadyExistsError();
    }
  }

  export class InsecurePasswordError extends Result<DomainError> {    
    public constructor () {
      super(false, {
        message: `The password provided wasn't up to security standards.`
      })
    }

    public static create (): InsecurePasswordError {
      return new InsecurePasswordError();
    }
  }
}