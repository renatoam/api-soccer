// talvez eu possa chamar esses metodos nos use cases
// mango usa use cases na camada de dominio
// models/domains podem ser interfaces ou types tbm
// Ter apenas uma responsabilidade (S, solid)
// otavio coloca algumas regras de dominio, tipo, validacap de email e nome no dominio/entidade
// no exemplo do projeto do frances, ele não colocou regras no dominio
// Ele coloca os use cases em uma camada de application
// khalil coloca use cases em uma camada de application tbm (ele usa CA com DDD)
// use cases pro khalil (createUser, login, etc)
// pro khalil, cada 'subdominio' (DDD) tem uma cadamada de domain, applicatio, adapter e infrastructure

// otavio coloca as regras da app nos casos de uso e todos tem uma interface que define sua forma
// as interfaces definem os metodos que as classes use cases terao
// Há erros personalizados, criados para o dominio pra retornar para os use cases
// cada erro é uma classe baseada na estrutura do DomainError e que estende Error (nativo)
// Use case são os Services? o Service Pattern é usado na camada de use cases?

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