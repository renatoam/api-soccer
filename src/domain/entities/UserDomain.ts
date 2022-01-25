export class UserDomain {
  public name: string
  public email: string
  public password: string

  constructor(name: any, email: any, password: any) {
    this.name = name
    this.email = email
    this.password = password
  }

  public validateName() {
    return typeof this.name === 'string'
  }

  public validateEmail() {
    return typeof this.email === 'string'
  }

  public validatePassword() {
    return typeof this.password === 'string'
  }
}