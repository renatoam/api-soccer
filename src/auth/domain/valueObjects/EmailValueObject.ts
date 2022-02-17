// export class Email extends ValueObject<EmailProps> {

//   get value (): string {
//     return this.props.email
//   }

//   private constructor (props: EmailProps) {
//     super(props);
//   }

//   private static isEmailValid (email: string): boolean {
//     // Naive validation
//     if (email.indexOf('.com') === -1) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   public static create (
//     props: EmailProps
//   ): Either<CreateUserError.EmailInvalidError, Result<Email>> {

//     if (this.isEmailValid(props.email)) {
//       return right(Result.ok<Email>(new Email(props)));
//     } else {
//       return left(CreateUserError.EmailInvalidError.create(props.email));
//     }
//   }
// }