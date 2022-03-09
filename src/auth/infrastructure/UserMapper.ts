import { Mapper } from "@shared/mappers/Mapper";
import { User } from "@auth/domain/entities/User";

export class UserMap implements Mapper<User> {
  toDomain(raw: any): User {
    throw new Error("Method not implemented.");
  }
  toPersistence(entity: User) {
    throw new Error("Method not implemented.");
  }
  toDTO(entity: User): Record<string, any> {
    throw new Error("Method not implemented.");
  }
  
}