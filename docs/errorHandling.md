# Error Handling

Há melhores formas de lidar com erros, do que apenas retornando `null`, colocando `console.log`, usando `throw Error` ou técnicas similares. E um melhor approach é criar erros personalizados.

## Null e Throw Error

Quando retornamos `null` nós forçamos o "client" (código que está consumindo isso) a saber com antecedência que algo pode ter dado errado, essa é a única forma dele conseguir lidar com esses erros, por exemplo, com `if (something !== null) { // código se 'true' }`.

Porém, nós não dizemos o quê exatamente deu errado nem se essa resposta abrange mais de uma possibilidade de erro (e consequentemente validação), não teríamos como diferenciar as possibilidades.

O problema acima provavelmente nos levaria a querer "lançar" (throw) um erro, mas nos faria ter que "encher" nosso código de `trycatch`. Mas o `trycatch` só deve ser usado para erros inesperados ou não previstos, situações em que não somos nós que "criamos" o erro, por exemplo, erros vindo de uma lib, um banco de dados ou qualquer API externa, problemas de conectividade, typos, problemas de memória, etc.

Além disso, `throw` não é `type-safe`, ou seja, não conseguimos tipar, em outras palavras, não conseguimos (nem a IDE) antever os tipos, não podemos validar conversões de tipagem ou coisas do tipo.

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

Mas assim como `Result` nos permite trabalhar com erros personalizados, tipados e de acordo com o contexto, temos uma outra abordagem que nos permite abstrair validações do mesmo contexto e trabalhar com as tipagens adequadas, é o `Value Object`.


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
