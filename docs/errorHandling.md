# Error Handling

Há melhores formas de lidar com erros, do que apenas retornando `null`, colocando `console.log`, usando `throw Error` ou técnicas similares. E um melhor approach é criar erros personalizados.

## Null e Throw Error

Quando retornamos `null` nós forçamos o "client" (código que está consumindo isso) a saber com antecedência que algo pode ter dado errado, essa é a única forma dele conseguir lidar com esses erros, fazendo um monte de checagem de valores nulos, por exemplo, com `if (something !== null) { // código se 'true' }`.

Porém, retornando `null` não temos como saber que algo deu errado sem olhar para os detalhes da implementação. Teríamos que fazer comparações de comportamento pra saber que se a função se comportou dessa forma pode ter dado certo ou não.

O problema acima *provavelmente* nos levaria a querer "lançar" (throw) um erro, mas nos faria ter que usar `trycatch` no contexto onde essa função é chamada.

Isso não é necessariamente um grande problema, mas o `trycatch` só deve ser usado para erros inesperados ou não previstos, situações em que não somos nós que "criamos" o erro. Por exemplo, erros vindo de uma lib, um banco de dados ou qualquer API externa, problemas de conectividade, typos, problemas de memória, etc.

Usando `throw` nós não informamos a função 'chamadora' que essa resposta pode ser um erro, nem se abrange mais de uma possibilidade de erro (e consequentemente validação). Além disso, `throw` não é `type-safe`, ou seja, ela não possui uma assinatura clara e tipada e não teríamos como diferenciar as possibilidades, não conseguimos (nem a IDE) antever os tipos, não podemos validar conversões de tipagem ou coisas do tipo.

> *"Since throwing error does not reflect on the method’s signature, all the safety of typed languages such as Typescript becomes useless since you are neither forced nor hinted, as a caller of such method, to do something with that error"*, Vegreville, Bruno.

Há quem diga que além de tudo isso, ainda é muito menos performático do que criar erros personalizados e usando `throw`, nós quebramos o fluxo do nosso código, pulando de 'handler em handler'.

Por fim, há um princípio de design de código (Method Return Type) que diz que um método deve retornar um único tipo, ou seja, `null` e `throw` também estariam violando esse princípio.

## Result Class

Uma forma de mitigar esses problemas é usando uma classe `Result` pra retornar estados de erro de forma segura, retornar resultados válidos e combinar resultadoos pra determinar o sucesso ou falha de múltiplos estados.

Com a classe `Result` podemos fazer validações usando `isSuccess()`, `isFailure()`, coletar o erro em si, coletar o valor em si e até checar a validade de um array com `combine`. Além disso, é `type-safe`, ou seja, conseguimos tipar nossos erros de acordo com o contexto (ou com o domínio, no caso da Clean Architecture).

Exemplo, ao invés de fazer:

```typescript
if (something === false) {
  throw Error('Algo deu errado.')
}

// ou
if (something === false) {
  return [new] Error('Algo deu errado.')
}

// ou
if (something === false) {
  console.error('Algo deu errado.')
  return null
}
```

Podemos fazer:

```typescript
if (something === false) {
  return Result.fail<User>('Algo deu errado.')
}

return Result.ok<User>(new User(userProps))
```

## Value Object

Imagine que nos exemplos acima, não exista apenas aquela validação, mas várias, por exemplo, um email pode ser verificado se é válido, se já está cadastrado na base, se respeita X ou Y condição. `Result` nos poupa de ter que retornar constructos genéricos, mas não nos poupa de termos diversas validações.

Mas assim como `Result` nos permite trabalhar com erros personalizados, tipados e de acordo com o contexto, temos uma outra abordagem que nos permite encapsular validações do mesmo contexto e trabalhar com as tipagens adequadas, é o `Value Object`.


Usando `Value Objects`, nós passaríamos de um código assim:

```typescript
  function createUser (email: string, firstName: string, lastName: string): Result<User> {
    if (!isValidEmail(email)) {
      return Result.fail<User>('Email is invalid')
    }

    if (!!firstName === false && firstName.length > 1 && firstName.length < 50) {
      return Result.fail<User>('First name is invalid')
    }

    if (!!lastName === false && lastName.length > 1 && lastName.length < 50) {
      return Result.fail<User>('Last name is invalid')
    }

    return Result.ok<User>(new User(email, firstName, lastName));
  }
```

Para algo como:

```typescript
  function createUser (email: string, firstName: string, lastName: string): Result<User> {
    const userOrError: Result<User> = User.create(email, firstName, lastName);
    
    if (userOrError.isFailure) {
      return Result.fail<User>(userOrError.error)
    }
  
    return Result.ok<User>(userOrError.getValue());
  }
```

[Leia mais](./cleanArchitecture/domain.md)

O problema dessa abordagem é que ainda teremos uma resposta única para várias possibilidades de erros, o que não resolve nosso problema. Mas e se nós criássemos tipos para os nossos erros?

Nós podemos agrupar todos os tipos de erros em um único tipo, usando o operador OU (|), ou seja, o retorno da validação X pode ser Y ou Z. Para agrupar criar esses tipos de forma padronizada, podemos usar os namespaces do Typescript, assim poderíamos ter algo como:

```typescript
 export namespace CreateUserError {

  export class UsernameTakenError extends Result<DomainError> {    
    public constructor (username: string) {
      super(false, {
        message: `The username "${username}" has already been taken.`
      })
    }

    public static create (username: string): UsernameTakenError {
      return new UsernameTakenError(username);
    }
  }

  export class EmailInvalidError extends Result<DomainError> {    
    public constructor (email: string) {
      super(false, {
        message: `The email "${email}" is invalid.`
      })
    }

    public static create (email: string): EmailInvalidError {
      return new EmailInvalidError(email);
    }
  }
}
```

E agrupados em um único tipo, ficaria assim:

```typescript
export type Response = Result<CreateUserError.EmailInvalidError>
| Result<CreateUserError.UsernameTakenError>
| Result<any>;
```

Mas ainda dá pra melhorar, porque podemos agrupar e separar os tipos de erros (Result<CreateUserError.X>) do tipo de sucesso (Result<any>). Isso é bom, porque temos várias possibilidades de erro, mas só uma de sucesso, então seria melhor se "categorizássemos" isso.

Podemos criar um `union type` que é o ou 'falha' ou 'sucesso'. Podemos chamar esse tipo de `Either` ("um ou outro" em inglês). E pra facilitar a legibilidade, podemos chamar o tipo para as falhas de `Left` e o tipo para o sucesso de `Right`. E cada um desses tipos recebe dois tipos também.

Teríamos algo assim:

```typescript
export type Either<L, A> = Left<L, A> | Right<L, A>;

type Response = Either<
  CreateUserError.UsernameTakenError | 
  CreateUserError.EmailInvalidError, 
  Result<any> // OK 
>

function createUser (email: string): Result<Email> {    
    const emailOrError: Either<CreateUserError.EmailInvalidError, 
      Result<Email>> = Email.create({ email })

    if (emailOrError.isLeft()) {
      return left(emailOrError.value);
    }
  
    return right(Result.ok());
  }
```