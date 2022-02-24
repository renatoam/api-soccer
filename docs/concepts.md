# Coesão e Coerência

[] Falar de Acoplamento

Em uma arquitetura de software, nós precisamos ter coesão e coerência. Coesão, no sentido textual, é como as ideias se conectam e os elementos textuais que auxiliam nisso são as preposições, conjunções, pronomes, advérbios, etc.

Então a forma como conectamos as ideias ajudam o texto a ter coerência. Mas a coesão apenas ajuda, o que de fato torna um texto coerente é se suas ideias fazem sentido entre si, seja num contexto interno ou externo.

Ou seja, pensando no mundo de Harry Potter, é coerente eu escrever um texto dizendo que um bruxo foi preso por praticar um feitiço proibido e no outro parágrafo dizer que ele fugiu da prisão voando em uma vassoura. Mas nesse contexto, seria incoerente eu dizer que ele fugiu da prisão soltando um Kamehameha na parede da cela.

Se eu escrevo um texto informando que a próxima Copa do Mundo será a última com 32 seleções, ela faz sentido externamente, no mundo real. Mas se torna incoerente se eu disser que nessa Copa está permitido o uso pokémons pra auxiliar nas partidas.

Trazendo isso para o mundo da arquitetura, os módulos de um software precisam se conectar harmoniosamente, precisamos saber bem como relacionar as coisas.

Por exemplo, na Clean Arquitecture, existem formas corretas de se conectar a camada de domínio com a camada da aplicação, e sabemos que a camada de domínio não pode se conectar diretamente com a camada de infraestrutura. Em outras palavras, a forma como conectamos as camadas da nossa arquitetura é o que define se ela é coesa ou não.

E pra manter uma arquitetura coerente, não podemos violar ou transgredir o propósito de cada camada. Por exemplo, a camada de domínio define as bases da nossa arquitetura, com as entidades, value objects e regras específicas ao negócio. Mas não podemos por exemplo acessar o banco de dados direto de lá, porque isso não faz parte do seu escopo. Pra isso usamos a camada de infraestrutura. E assim por diante.

Pensando dessa forma e respeitando os conceitos do modelo arquitetural que escolhermos, é a única forma de desenvolver uma aplicação coesa e coerente.