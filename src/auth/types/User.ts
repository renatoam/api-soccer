import { Entity } from "@shared/models/Entity";

type RoleType = 'ADMIN' | 'EDITOR' | 'PLAYER'

export interface IUserProps {
  name: string
  email: string
  password: string
  role: RoleType
}

export class User extends Entity<IUserProps> {
  static props: IUserProps

  constructor(props: IUserProps) {
    super(props)
  }
}