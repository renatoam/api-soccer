# Architecture and Back-End study notes

- [OOP Tips](./oopTips.md)
- [Error Handling](./errorHandling.md)

## Clean Architecture

Na DDD, há uma ferramenta "correta" pra tudo que é possível fazer na arquitetura do sistema, ou seja, há uma ferramenta certa pra validação de dados, lidar com erros, retorno de comandos ou queries, salvar ou recuperar dados, entre muitas outras atividades.

A Clean Architecture tem duas camadas principais, Domain e Infrastructure.

Dentro da camada de Domain, nós temos as Entidades, Use Cases, Domain Services, Domain Events, Value Objects, etc.

Dentro da camada de Infra, nós temos os Adapters e a Presentation, que é responsável pela view da aplicação.

- [CA | Domain](./cleanArchitecture/domain.md)
- [CA | Use Cases](./cleanArchitecture/useCases.md)
- [CA | Adapters](./cleanArchitecture/adapters.md)
- [CA | Infrastructure](./cleanArchitecture/infrastructure.md)
