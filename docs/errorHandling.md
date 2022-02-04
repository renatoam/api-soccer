# Error Handling

- Há uma forma específica de lidar com erros, criando erros personalizados.
- Quando retornamos `null` nós forçamos o "client" a saber que algo pode ter dado errado, mas não dizemos o quê. E se essa resposta abrange mais de uma possibilidade de erro e validação, não teríamos como diferenciar.
- O problema acima provavelmente nos levaria a querer "lançar" (throw) um erro, mas nos faria ter que encher nosso código de `trycatch`. Mas `trycatch` só deve ser usado para situações em que não somos nós que criamos o erro, por exemplo, erros vindo de uma lib, um banco de dados, qualquer API externa.
- Há um princípio de design de código que diz que um método deve retornar um único tipo. Ele também estaria sendo violado por esses abordagens.
- Uma forma de mitigar esses problemas é usando uma classe `Result` pra retornar estados de erro de forma segura, retornar resultados válidos e combinar resultadoos pra determinar o sucesso ou falha de múltiplos estados.
- Com a classe `Result` podemos fazer validações usando `isSuccess()`, `isFailure()`, coletar o erro em si, coletar o valor em si e até checar a validade de um array com `combine`.