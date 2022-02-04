# Domain/Entities

- Regras inerentes ao negócio, independente do tipo de aplicação, são colocadas no domínio.
- Pelo que entendi, há um modelo Entity que serve como base pra todas as entities criadas. E cada entity recebe uma interface (Entity<interface>) relacionada a ela.
- Khalil usa DDD pra definir seus domínios.
- Pro Khalil, cada **subdomínio** (DDD) tem suas próprias camadas de domain, application, adapter e infrastructure.
- As entidades possuem valores iniciais e default.
- As entidades possuem identidade, como: User, Job, Organization, etc. Diferente de ValueObjects, que não possuem identidade e parecem como: Name, MessageText, JobTitle, etc.
- Não está claro pra mim se uma entidade necessariamente precisa de um getter, mas sei que nem sempre cabe um setter, porque alguns valores não podem ser modificados dessa forma.

### CQRS

- CQRS é um CQS em nível arquitetural, separando models que são read (queries) de models que são write (commands)

### Domain Service

- Algumas vezes precisamos de uma camada a mais no domínio, que é quando uma regra de negócio depende de duas entidades, então criamos a Domain Service.
- Quando isso ocorre e uma entidade referencia uma outra entidade, usamos o *aggregate root design*.
- Aggregates são modelos que lidam com a junção de duas entidades.
- Acho que em um primeiro momento, quando criar a regra de registrar um clube, isso poderá ser feito direto na entidade, mas num segundo momento, quando a entidade User for adicionada, pode ser necessário criar um Domain Service, porque se no cadastro do clube, for ser registrado quem o cadastrou, isso deveria pertencer à camada do usuário ou do clube? Como há uma dependência entre as entidades, faz sentido criar uma terceira pra gerenciar isso.

### Domain Event

- Qualquer ação (mesmo um CRUD) relevante para o negócio precisa ter um *Domain Event* criado pra si.

### Validação

- Eu posso colocar validações nas entidades.
- Geralmente, nas entidades vão as validações **semânticas**, que não tem a ver com a validade do código passado, mas com a violação das regras de negócio.
- Geralmente, deixamos as validações **sintáticas** fora das entidades do domínio, podendo ficar nos useCases. Segundo Bob Martin, não é tão bom que fique nas controllers, porque poderia ferir o princípio de *Single Responsability*, mas também não é bom que *só* exista no Front-End (mas tem que ter lá também), porque há diversas formas de burlar isso. Parece que os useCases são de fato o melhor lugar.
- As validações são encapsuladas em **Value Objects**.
- ValueObjects não possuem identidade e parecem como: Name, MessageText, JobTitle, etc.

## Na prática

Pra criar as entidades, precisamos:
- Criar uma Entity base, que serve como molde pras entidades que iremos criar.
- Essa Entity base recebe a interface da entidade que iremos criar como tipo "<IEntidadeProps>".
- As propriedades dessa interface recebem como tipo (quando for o caso) ValueObjects, pra fazer a validação desses campo, por exemplo, uma prop "email" não receberia "string" como tipo, mas um ValueObject criado pra si, chamado "UserEmail".
- Para "armazenar uma entidade", usamos um Repository e um Mapper.
- Repository é um artefato usado pra salvar e recuperar dados de alguma tecnologia de persistência de dados (bd, json file, nosql, etc.).
- Já um Mapper é um arquivo que mapeia um Domain Object (entidade) para o formato necessário para persistí-lo. E vice versa (mapear um Active Record de volta para um domain object).
  - Toda vez que usamos um ORM e manipulamos "instâncias das rows do bd", estamos trabalhamos com Active Records, que é um modelo que armazena uma representação em memória de uma row do banco (ou um document, no caso de NoSQL).
  - No exemplo do Khalil, ele use uma interface UserRepo como base pra implementar um repository específico de User com Sequelize. Aqui me deixa duas dúvidas: posso criar essa interface como uma classe ou é isso mesmo? E a outra, devo ter uma base de repositories genérica na qual UserRepo e todas as outras interfaces se baseiam ou só esse nível já tá bom?