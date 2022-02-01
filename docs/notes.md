# Anotações do estudo

## Geral

A Clean Architecture tem duas camadas principais, Domain e Infrastructure.

Dentro da camada de Domain, nós temos as Entidades, Use Cases, Domain Services, Domain Events, Value Objects, etc.

Dentro da camada de Infra, nós temos os Adapters e a Presentation, que é responsável pela view da aplicação.

Pelo meu entendimento, como eu não tenho uma camada Presentation, posso colocar uma pasta a mais, chamada Infrastructure, pra representar a última subcamada da camada de Infra.

### Classes/OOP

- Um constructor privado (ou classes abstratas) não permite a instanciação da classe com "new ClassName()", mas se a ele for adicionado um método estático (e público), esse método pode ser acessado diretamente a partir da classe (Factory pattern)
- Métodos e propriedades private não ficam disponíveis fora da classe. Ninguém consegue acessar com "Classe.metodo()" nem com "Instancia.metodo()".
- Quando criamos uma classe que estende outra, para que possamos acessar as props da classe pai, usamos 'super()' no construtor. Se a classe pai precisa receber algum valor como parametro, precisamos passar esse valor como parametro em "super(value)" também, ou seja, a classe filha precisa receber e valor como parametro e repassar pra super.
- O objeto "this" não pode ser acessado antes de "super()" ser definido.
- Métodos Factory lidam com tarefas para a entidade.


### Error Handling

- Há uma forma específica de lidar com erros, criando erros personalizados.
## Domain/Entities

- Regras inerentes ao negócio, independente do tipo de aplicação, são colocadas no domínio.
- Pelo que entendi, há um modelo Entity que serve como base pra todas as entities criadas. E cada entity recebe uma interface (Entity<interface>) relacionada a ela.
- Khalil usa DDD pra definir seus domínios.
- Pro Khalil, cada **subdomínio** (DDD) tem suas próprias camadas de domain, application, adapter e infrastructure.
- As entidades possuem valores iniciais e default.
- As entidades possuem identidade, como: User, Job, Organization, etc. Diferente de ValueObjects, que não possuem identidade e parecem como: Name, MessageText, JobTitle, etc.
- Não está claro pra mim se uma entidade necessariamente precisa de um getter, mas sei que nem sempre cabe um setter, porque alguns valores não podem ser modificados dessa forma.

### [Domain] CQRS

- CQRS é um CQS em nível arquitetural, separando models que são read (queries) de models que são write (commands)

### [Domain] Domain Service

- Algumas vezes precisamos de uma camada a mais no domínio, que é quando uma regra de negócio depende de duas entidades, então criamos a Domain Service.
- Quando isso ocorre e uma entidade referencia uma outra entidade, usamos o *aggregate root design*.
- Aggregates são modelos que lidam com a junção de duas entidades.
- Acho que em um primeiro momento, quando criar a regra de registrar um clube, isso poderá ser feito direto na entidade, mas num segundo momento, quando a entidade User for adicionada, pode ser necessário criar um Domain Service, porque se no cadastro do clube, for ser registrado quem o cadastrou, isso deveria pertencer à camada do usuário ou do clube? Como há uma dependência entre as entidades, faz sentido criar uma terceira pra gerenciar isso.

### [Domain] Domain Event

- Qualquer ação (mesmo um CRUD) relevante para o negócio precisa ter um *Domain Event* criado pra si.

### [Domain] Validação

- Eu posso colocar validações nas entidades.
- Geralmente, nas entidades vão as validações **semânticas**, que não tem a ver com a validade do código passado, mas com a violação das regras de negócio.
- Geralmente, deixamos as validações **sintáticas** fora das entidades do domínio, podendo ficar nos useCases. Segundo Bob Martin, não é tão bom que fique nas controllers, porque poderia ferir o princípio de *Single Responsability*, mas também não é bom que *só* exista no Front-End (mas tem que ter lá também), porque há diversas formas de burlar isso. Parece que os useCases são de fato o melhor lugar.
- As validações são encapsuladas em **Value Objects**.
- ValueObjects não possuem identidade e parecem como: Name, MessageText, JobTitle, etc.

## UseCases

- Regras de negócio que variam de acordo com o tipo de aplicação são colocadas nos useCases.
- Os useCases devem ter apenas uma responsabilidade (o S do solid).
- O estilo de services que tenho usado (com um único método `execute`) são os useCases.
- Os services/useCases precisam ser agnósticos a tecnologia, podendo ser implementados por qualquer framework. Na camada de adapters, outros serviços - com estrutura específica ora X framework - são criados implementando o modelo do useCase.
- O Manguinho usa os useCases na camada de domínio. Não sei se gosto, prefiro separar a camada de forma literal, com uma pasta própria (application).

### [UseCases] CQS

- CQS Principle: useCases são commands e queries.

## Adapters

## Infrastructure


## Sumarizando

### Domain

Pra criar as entidades, precisamos:
- criar uma Entity base, que serve como molde pras entidades que iremos criar.
- Essa Entity base recebe a interface da entidade que iremos criar como tipo "<IEntidadeProps>".
- As propriedades dessa interface recebem como tipo (quando for o caso) ValueObjects, pra fazer a validação desses campo, por exemplo, uma prop "email" não receberia "string" como tipo, mas um ValueObject criado pra si, chamado "UserEmail".