# Anotações do estudo

talvez eu possa chamar esses metodos (que estão atualmente nas entities) nos use cases
mango usa use cases na camada de dominio
models/domains podem ser interfaces ou types tbm
Ter apenas uma responsabilidade (S, solid)
otavio coloca algumas regras de dominio, tipo, validacap de email e nome no dominio/entidade
no exemplo do projeto do frances, ele não colocou regras no dominio
Ele coloca os use cases em uma camada de application
khalil coloca use cases em uma camada de application tbm (ele usa CA com DDD)
use cases pro khalil (createUser, login, etc)
pro khalil, cada 'subdominio' (DDD) tem uma cadamada de domain, applicatio, adapter e infrastructure

otavio coloca as regras da app nos casos de uso e todos tem uma interface que define sua forma
as interfaces definem os metodos que as classes use cases terao
Há erros personalizados, criados para o dominio pra retornar para os use cases
cada erro é uma classe baseada na estrutura do DomainError e que estende Error (nativo)
Use case são os Services? o Service Pattern é usado na camada de use cases?
no artigo que o khalil explica as diferenças, me parece que os usecases sào de fatos os services da DDD
me parece que services são abstratos embora especificos pra tarefa, na camada de infra tem ourtos services (?) que implementam especificamente pra um framwork

useCases são ou commands ou queries (CQS principle)

o melhor jeito de criar dominio é seguir DDD

Validações são domain layer. Nós encapsulamos as validações em Value Objects.

As vezes precisamos de uma camada a mais depois do dominio, quando uma regra de negócio depende de duas entidades, a Domain Service

Se uma entidade referencia uma outra entidade, a gente usa o aggregate root design.

As entidades possuem valores iniciais e default.

Qualquer ação (mesmo um crud) relevantes para o negócio precisam ter um Domain Event criado