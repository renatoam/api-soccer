# Data Access

> *In DDD, the Repositories, Data Mappers and DTOs are a critical part of the entity lifecycle that enable us to store, reconsitute and delete domain entities*, Stemmler, Khalil.

https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/

## DTO

Stands for Data Transfer Object. O DTO em si não é um modelo de domínio, mas ele possui algumas propriedades do domínio. Nós usamos DTO pra mepear e trafegar dados entre sistemas.

Por exemplo, em uma query que nos retorna um objeto com 10 propridades, mas só precisamos de 4, usamos o DTO pra mapear essas 4 propriedades, porque só precisamos delas pra que faça sentido no nosso contexto.

Em outras palavras, nós padronizamos a estrutura da resposta que recebemos. Funciona como um contrato. Definimos e informamos o que precisamos pra receber.

Em termos práticos, podemos definir um DTO com uma `interface` no `Typescript`.

## Repositories

Usamos repositories pra salvar, recuperar, deletar e atualizar dados relacionados a uma entidade de domínio. Repositories são Facades, que é um design pattern que se refere a um objeto que disponibiliza uma interface simplificada para um código grande.

O melhor jeito (na minha opinião) pra trabalhar com repositories é criando um repository base, com métodos comuns a qualquer repository, como `save()`, `delete()` e `exists()`. E depois disso, estender esse repository base em um repository mais específico ao domínio, adicionando métodos específicos.

Uma das grandes sacadas de usar repositories como interface primeiro, é que não ficamos independentes de uma tecnologia específica ou presos a uma implementação, nós definimos um modelo e qualquer tecnologia usada no sistema, vai usá-lo na implementação.

E por ser independente de tecnologia e implementação, se precisarmos mudar qualquer um desses, podemos fazer sem nenhum problema de acoplamento, o que nos faz aderir ao Liskov principle, do SOLID, que basicamente, permite que troquemos uma implementação por outra.

Isso sem contar injeção de dependências e facilitação nos testes (facilidade pra usar mocks).

## Data Mappers

Ok. Entendemos que quem realiza a ação é o repositório e o DTO define a forma dos objetos que precisamos, mas quem de fato cria os objetos que precisamos seguindo o modelo definido pelos DTOs ou pelos domínios? Os data mappers.

Geralmente, data mappers são classes com 3 métodos básicos, que convertem um objeto de uma forma para outra: `toDomain()`, `toPersistence()` e `toDTO()`.

Quando criamos um novo registro para uma entidade (um novo user, por exemplo), nós usamos o mapper com `toDomain()` pra realizar essa ação. Ou quando precisamos definir um objeto que precisa ser salvo no banco de dados, mas adequando seus campos (de camelCase pra snake_case, por exemplo), usamos `toPersistence()`, e quando precisamos criar um objeto para o DTO, usamos `toDTO()`.

Podemos também definir um Mapper base e estendê-lo em mappers mais específicos para os domínios, como fazemos com repositories.
