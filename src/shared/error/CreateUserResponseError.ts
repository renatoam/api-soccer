import { AppError } from "./AppErrorNamespace";
import { CreateUserError } from "./CreateUserErrorNamespace";
import { Result } from "./Result";

export type Response = Result<CreateUserError.EmailInvalidError> 
| Result<CreateUserError.AccountAlreadyExistsError>
| Result<CreateUserError.InsecurePasswordError>
| Result<CreateUserError.UsernameTakenError>
| Result<AppError.UnexpectedError>
| Result<any>;