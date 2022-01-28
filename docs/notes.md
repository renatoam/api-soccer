# Anotações do estudo

## Geral

### Error Handling

- Há uma forma específica de lidar com erros, criando erros personalizados.
## Domain/Entities

- Regras inerentes ao negócio, independente do tipo de aplicação, são colocadas no domínio.
- Pelo que entendi, há um modelo Entity que serve como base pra todas as entities criadas. E cada entity recebe uma interface (Entity<interface>) relacionada a ela.
- Khalil usa DDD pra definir seus domínios.
- Pro Khalil, cada **subdomínio** (DDD) tem suas próprias camadas de domain, application, adapter e infrastructure.
- As entidades possuem valores iniciais e default.

### [Domain] CQRS

- CQRS é um CQS em nível arquitetural, separando models que são read (queries) de models que são write (commands)

### [Domain] Domain Service

- Algumas vezes precisamos de uma camada a mais no domínio, que é quando uma regra de negócio depende de duas entidades, então criamos a Domain Service.
- Quando isso ocorre e uma entidade referencia uma outra entidade, usamos o *aggregate root design*.
- Aggregates são modelos que lidam com a junção de duas entidades.

### [Domain] Domain Event

- Qualquer ação (mesmo um CRUD) relevante para o negócio precisa ter um *Domain Event* criado pra si.

### [Domain] Validação

- Eu posso colocar validações nas entidades.
- Geralmente, nas entidades vão as validações **semânticas**, que não tem a ver com a validade do código passado, mas com a violação das regras de negócio.
- Geralmente, deixamos as validações **sintáticas** fora das entidades do domínio, podendo ficar nos useCases. Segundo Bob Martin, não é tão bom que fique nas controllers, porque poderia ferir o princípio de *Single Responsability*, mas também não é bom que *só* exista no Front-End (mas tem que ter lá também), porque há diversas formas de burlar isso. Parece que os useCases são de fato o melhor lugar.
- As validações são encapsuladas em **Value Objects**.

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
