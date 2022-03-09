# OOP Tips

## Constructor

- Um constructor privado (ou classes abstratas) não permite a instanciação da classe com "new ClassName()", mas se a ele for adicionado um método estático (e público), esse método pode ser acessado diretamente a partir da classe (Factory pattern)
- Métodos e propriedades private não ficam disponíveis fora da classe. Ninguém consegue acessar com "Classe.metodo()" nem com "Instancia.metodo()".
- Quando criamos uma classe que estende outra, para que possamos acessar as props da classe pai, usamos 'super()' no construtor. Se a classe pai precisa receber algum valor como parametro, precisamos passar esse valor como parametro em "super(value)" também, ou seja, a classe filha precisa receber e valor como parametro e repassar pra super.
- O objeto "this" não pode ser acessado antes de "super()" ser definido.
- Métodos Factory lidam com tarefas para a entidade.

## Herança

Herança é basicamente definir uma classe modelo na qual outras classes irão se basear. Por exemplo, se temos uma classe `Dog` e outra `Cat`, ambas com seu som característico, descrição de raça e nome, não precisamos criar um código duplicado, com as mesmas coisas em cada uma das classes. Nesse caso, criaríamos uma class `Animal`, com esses dados comuns às duas classes anteriores, e essas classes podem apenas **herdar** essas características.

E como o "som do cachorro" é diferente do "som do gato", apesar do método ser o mesmo, a implementação seria diferente. Isso é **polimorfismo**.

## Polimorfismo

Pegando o exemplo anterior, de uma classe `Animal`, que é herdada por uma classe `Dog` e outra `Cat`, o método `animalSound()` é o mesmo para as duas classes, mas `Dog` irá implementar passando como valor um `auau` e `Cat` vai implementar passando o valor como `miau`. Ou seja, polimorfismo é a habilidade de se usar um mesmo método com implementações diferentes, de jeitos específicos para cada necessidade ou contexto.

Como o polimorfismo permite lógicas específicas para cada implementação de um método, mas respeitando um modelo, ele por consequência permite a inversão de dependência. Ou seja, uma classe, objeto de alto nível, não precisa chamar ferramentas da aplicação diretamente, muito pelo contrário, ela serve como base e é a implementação que irá referenciá-la em sua lógica.

## Abstração

Quando criamos uma classe base, modelo, não estamos apenas sugerindo propriedades e métodos para as classes que irão herdá-la, estamos garantindo que isso seja feito, estamos definindo um "contrato".

O conceito de abstração é exatamente isso, definir um objeto abstrato que servirá de molde para implementação de outros objetos. Isso pode ser através de uma classe abstratas, interfaces ou types.

## Encapsulamento

O encapsulamento é basicamente determinar quais propriedades ou métodos de uma classe podem ser acessadas por algum código externo, que usa essa classe de alguma forma.

E por que iríamos querer privar o código executor de usar um método? Bom, muitas vezes, uma classe possui um método interno que só serve para buscar alguma informação pertinente para um outro método dessa classe ou ela pode possuir alguma propriedade (`password`, por exemplo) que serve para o propósito interno da classe, mas não é bom que seja acesso (mesmo que sem querer) por algum código externo. Por esse motivo, tornaríamos um método ou propriedade privados (`private`).

Às vezes, temos propriedades e métodos de uma classe que não podem ser acessados por códigos externos, mas que podem ser acessados por instâncias (objetos filhos) dessa classe. Nesse caso, esses métodos e propriedades são chamados de protegidos (`protected`).

Qualquer propriedade ou método que pode ser acessado externamente, é considerado público, não sendo necessário deixar isso explícito com o modificador `public`, mas se quiser, não tem problema.

Encapsulamento não precisa ser obsessão. É só uma característica e possibilidade, não é uma lei.
