import { ValueObject } from "./ValueObject";

interface NameProps {
  value: string
}

class Name extends ValueObject<NameProps> {

  get value (): string {
    return this.props.value;
  }
  
  // Can't use the `new` keyword from outside the scope of the class.
  private constructor(props: NameProps) {
    super(props);
  }

  public static create (name: string) : Name {
    if (name === undefined || name === null || name.length <= 2 || name.length > 100) {
      throw new Error('User must be greater than 2 chars and less than 100.')
    } else {
      return new Name({ value: name })
    }
  }
}