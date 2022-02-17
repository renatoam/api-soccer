import { Result } from "@/shared/error/Result";
import { UseCase } from "@/shared/types/UseCase";

// simulando uma classe User. ignorar essa estrutura, é tudo inventado baseado em nada, só pra conseguir seguir no exemplo do artigo
class User {
  static error: any;

  static create(user: any) {
    if (!user)
    return { isFailure: this.isFailure, error: this.error }

    if (user)
    return { getValue: this.getValue }
  }
  static isFailure() {
    throw new Error("Method not implemented.");
  }
  static getValue() {
    throw new Error("Method not implemented.");
  }
}

// simulando um repository (shape) UserRepo pra persistir dados
interface IUserRepo {
  save: (user: User) => Promise<void>
}

interface SignUpRequestDTO {
  email: string
  password: string
  confirmPassword: string
}

export class SignUpUseCase implements UseCase<SignUpRequestDTO, Result<User>> {
  private userRepo: IUserRepo

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  async execute(request: SignUpRequestDTO): Promise<Result<User>> {
    const { email, password, confirmPassword } = request

    const userOrError = User.create({
      email, password, confirmPassword
    })

    if (userOrError.isFailure)
      return Result.fail<User>(userOrError.error)

    const user = userOrError.getValue() as unknown as User // gambiarra

    await this.userRepo.save(user)

    return Result.ok<User>(user)
  }
}