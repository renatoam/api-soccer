# UseCases

- Regras de negócio que variam de acordo com o tipo de aplicação são colocadas nos useCases.
- Os useCases devem ter apenas uma responsabilidade (o S do solid).
- O estilo de services que tenho usado (com um único método `execute`) são os useCases.
- Os services/useCases precisam ser agnósticos a tecnologia, podendo ser implementados por qualquer framework. Na camada de adapters, outros serviços - com estrutura específica ora X framework - são criados implementando o modelo do useCase.
- O Manguinho usa os useCases na camada de domínio. Não sei se gosto, prefiro separar a camada de forma literal, com uma pasta própria (application).

### CQS

- CQS Principle: useCases são commands e queries.