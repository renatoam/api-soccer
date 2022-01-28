export class User {
  public name: string
  public email: string
  public password: string

  // Tipei com any pra poder fazer os testes
  constructor(name: any, email: any, password: any) {
    this.name = name
    this.email = email
    this.password = password
  }

  public validateName(name: any) {
    // mudar isso aqui:
    // Validações sintáticas não devem ficar no domínio, passar pra useCases
    // Domínio só possui validações semânticas
    const isNameValid = !!name
    const isNameTypeString = typeof this.name === 'string'

    if (!isNameValid) throw new Error('Name is required.')
    if (!isNameTypeString) throw new Error('Name should be a string.')

    return 'Sucess'
  }

  public validateEmail() {
    return typeof this.email === 'string'
  }

  public validatePassword() {
    return typeof this.password === 'string'
  }
}