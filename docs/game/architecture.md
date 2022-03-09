# Architecture

## Subdomínios

`Auth`, `Playing` e `Ranking`. Sendo `Playing` e `Ranking` subdomínios "core", porque não podem ser terceirizados, no sentido de serem feitos por libs/ferramenta externa.

## Entidades

- User [Auth]: pode ter `Admin`, `Editor` ou `Player` como `role`;
- Club [Playing]
- Game [Playing]
- Round [Playing]
- Tournament [Ranking]
- Leaderboard [Ranking]

## Linguagem

- **Player**: qualquer usuário registrado na plataforma. Pode ser qualquer `role` de `User`, `PLAYER`, `EDITOR` ou `ADMIN`.
- **Club**: time de futebol que será o objeto de comparação entre os *players*, usando suas *categorias*.
  - **Category**: primeiro nível de atributos referentes a um `Club`. Podem ser comparadas entre si, como também podem ter sub-atributos, ou seja, *opções* que também podem ser comparadas.
  - **Options**: sub-atributos de uma `Category`, que podem ser comparados com outros sub-atributos ou mesmo com uma `Category`.
- **Tournament**: campeonato entre clubes de futebol, onde as disputas são realizadas mediante comparação de atributos de um `Club`.
  - **Format**: formato do `Tournament`, podendo ser `KNOCKOUT` (mata-mata) ou `LEAGUE` (pontos corridos).
- **History**: histórico dos jogos e torneios disputados (por um usuário ou geral).
- Game: [CONTINUAR]

---

## O jogo (do ponto de vista de cada entidade)

### User

- O `User` se **registra** como `Player` e **escolhe um `Club`** favorito.

### Player

- O `Player` registrado recebe o tipo `user`, enquanto o `Player` adversário, caso não seja outro `User`, recebe o tipo `cpu`.

- O `Player`, ao iniciar um turno, **escolhe uma `category`** do `Club` para iniciar a comparação. Os tipos de `category` são: `stadium`, `stats`, `trophies` e `legends`.
  > *Obs.: quando uma `category` é escolhida, ambos os jogadores irão comparar a mesma `category`. Se o `Player` escolhido pra começar a partida for do tipo `cpu`, a `category` será escolhida aleatoriamente, assim como a `option` e o `attribute`.*

- O `Player` **escolhe uma `option`** dessa `category` para comparar. Se o escolhido pra começar a partida for do tipo `cpu`, a `option` é escolhida aleatoriamente. Se a `option` escolhida for `position`, será necessário escolher um `attribute` dessa `option` para realizar a comparação.
  > *Obs.: se o `attribute` escolhido não estiver presente na `option` do adversário, um `attribute` aleatório será escolhido no lugar. Ex.: se a `option` escolhida for `position`, sendo o tipo passado `goalkeeper` e `handling` escolhido como `attribute`, a menos que o adversário tenha um `goalkeeper` também, o `attribute` comparado será diferente.*

### Player e Tournament (Domain Service)

- O `Player` **cria e inicia** um novo `Tournament`, informando seu `format`.

- Quando o `Player` inicia uma partida, o `Tournament` **indica qual `Game` será realizado**.

### Player e Game (Domain Service)

- O `Player` **inicia uma partida (`Game`)**.

### Tournament

- O `Tournament`, ao fim do campeonato, **registra o `Club` vencedor** e **desabilita suas próprias ações** para que este seja completamente encerrado.

### Tournament e Round (Domain Service)

- O `Tournament` **cria os `Rounds` (rodadas)** aleatoriamente, baseando-se no `format` escolhido.
  > *Obs.: em `format` de tipo `KNOCKOUT`(mata-mata), caso o número de `Players` seja **ímpar**, **selecionar aleatoriamente dois `Players`** e **criar uma preliminar**.*

### Tournament e Game (Domain Service)

- O `Tournament` **cria os `Games`** aleatoriamente em cada `Round`. Cada `Game` é composto por dois `Players`. A ordem definida pelo `Tournament` não pode ser alterada.

### Game

- O `Game` é dividido em três turnos, onde o vencedor é o `Player` que vencer dois turnos primeiro.

- O `Game` **seleciona aleatoriamente** qual `Player` começa a partida (`Game`).

- O `Game` **compara os valores** das `options` de cada `Club` e **determina o vencedor do turno**.

### Game e Round (Domain Service)

- O `Game`, ao final dos três turnos (ou dois, caso um `Player` vença dois turnos seguidos), **registra o resultado no `Round` (game, vencedor e placar)**.

### Game e Leaderboard (Domain Service)

- O `Game`, ao final dos três turnos (ou dois, caso um `Player` vença dois turnos seguidos), **registra os dados dos `Players`** na `Leaderboard` (pontuação, vitória, derrota, empate, etc.)

---
## Regras de Negócio [A FAZER]

- User
  - Criar usuário
  - Verificar se usuário já existe

## Use Cases [A FAZER]

- **User**: se registra ou se loga (e desloga); inicia rodada; escolhe a categoria; escolhe as opções; se escolher `legends`, escolhe os atributos;
  - signUp(email: UserEmail, password: UserPassword, confirmPassword: UserPassword)
  - signIn(email: UserEmail, password: UserPassword)
  - signOut(authToken: JWTToken)
  - verifyEmail(emailVerificationToken: EmailVerificationToken)
  - changePassword(passwordResetToken: Token, password: UserPassword)

- **User/Tournament [Domain Service]**: `User` escolhe formato do `Tournament`; `User` inicia novo `Tournament`; `User` registra `Tournament` no *histórico*;

  ```typescript
    chooseTournamentFormat(format: TournamentFormat)
    initTournament(tournament: Tournament)
    saveTournament(tournament: Tournament)
  ```
  
- Game: distribui os clubes baseado no formato escolhido, determinando os confrontos e rodadas;

## Events [A FAZER]
## Repositories [A FAZER]