import { Repo } from "@/shared/types/Repository";
import { User } from "@/auth/domain/entities/User";

interface IUserRepo extends Repo<User> {}

export class UserRepository implements IUserRepo {
  exists(t: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(t: User): Promise<any> {
    throw new Error("Method not implemented.");
  }
  save(t: User): Promise<any> {
    throw new Error("Method not implemented.");
  }
  
}