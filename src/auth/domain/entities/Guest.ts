import { Entity } from "@shared/models/Entity"

interface GuestProps {
  name: string
  email: string
  password: string
}

export class Guest extends Entity<GuestProps> {  
  // Tipei com any pra poder fazer os testes
  private constructor(props: GuestProps) {
    super(props)
  }

  
  public get name(): string {
    return this.props.name
  }

  public static create(props: any) {
    if (props.name === null || props.name === undefined) {
      throw new Error('Must provide a name for the guest user')
    } else {
      return new Guest(props)
    }
  }
  

  public validateName(name: any) {
    // mudar isso aqui:
    // Validações sintáticas não devem ficar no domínio, passar pra useCases
    // Domínio só possui validações semânticas
    const isNameValid = !!name
    const isNameTypeString = typeof this.props.name === 'string'

    if (!isNameValid) throw new Error('Name is required.')
    if (!isNameTypeString) throw new Error('Name should be a string.')

    return 'Sucess'
  }

  public validateEmail() {
    return typeof this.props.email === 'string'
  }

  public validatePassword() {
    return typeof this.props.password === 'string'
  }
}