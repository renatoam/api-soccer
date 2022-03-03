# The Biggest Club

O jogo consiste de um jogador que escolhe um clube e compara os atributos desse clube com outros clubes (que também são comparados entre si) superando-os em batalha até que tenha enfrentado todos. Ao final, o clube com mais pontos, se torna o campeão.

O jogador só poderá escolher uma categoria por adversário. As opções escolhidas dessa categoria são limitadas em 3, ou seja, 3 turnos por rodada. Os pontos definidos pra cada opção é definida pelo jogo e seus critérios ficarão registrados em algum menu de ajuda.

A quantidade de rodadas até o fim do torneio é definida pela quantidade de times registrados e qual formato escolhido pelo jogador, se pontos corridos ou mata-mata. Se o formato escolhido for pontos corridos, cada clube terá que jogar a quantidade de clubes menos um (ele mesmo) pra chegar ao fim. Caso o formato seja de mata-mata, cada rodada tem um clube eliminado, até que sobrem apenas dois, que farão a grande final.

Ao final do jogo, a leaderboard e as pontuações são resetadas e um novo jogo é iniciado. O histórico de jogos e títulos são mantidos para consultas futuras.

## Pontuação

Assim como nas regras do futebol oficial a pontuação segue os seguintes critérios:

- **Vitória**: 3 pontos
- **Empate**: 1 ponto
- **Derrota**: 0 pontos

Os critérios de desempate são, nessa ordem: `vitórias`, `confronto direto`, `quantidade de lendas`.

## O jogo

- O `Player` se **registra** e **escolhe um `Club`** favorito.
- O `Player` **escolhe o formato** do `Tournament` que quer iniciar.
- O `Player` **inicia** um novo `Tournament` e **registra o `Tournament`** no `History` (com id, registro único).
- O `Game` **distribui os `Clubs`** no `Format` correto. *Em formato de mata-mata, caso o número de clubes seja ímpar, um clube pode ser removido (a princípio).*
- O `Game` **determina as rodadas** aleatoriamente (baseado no `Format` escolhido e `Fixtures` (confrontos) disponíveis, em caso de pontos corridos).

- O `Player` **inicia uma partida**.
- O `Game` **seleciona aleatoriamente** qual `Player`/`Club` (ou CPU) começa a partida.
- O `Player`/`CPU` **escolhe uma categoria (`stadium`, `legends`, etc.)** do `Club` para comparar. Quando uma categoria é escolhida, ambos os players irão comparar a mesma categoria. *Se o escolhido pra começar a partida for a CPU, a categoria é escolhida aleatoriamente.*
- O `Player`/`CPU` **escolhe três opções** dessa categoria para comparar. *Se o escolhido pra começar a partida for a CPU, as opções são escolhidas aleatoriamente.*
  - O caso de comparar a categoria `Legends` é um pouco diferente. Essa categoria tem uma subcategoria, `posição` em que se pode comparar atributos específicos de cada posição. Se essa for a categoria escolhida, será necessário realizar uma última seleção, dos atributos da posição. Se os atributos escolhidos não estiverem presentes no `legends` adversário, um atributo aleatório será escolhido no lugar. Ex.: se escolhido um `goleiro` como `legend` e `handling` é escolhido como atributo de comparação, nesse caso, a menos que o adversário tenha um `goleiro` também, os atributos comparados serão diferentes.

- O `Game` **compara os valores** das opções de cada clube, **exibe o resultado** e **credita os pontos** da rodada.
- O `Game` **registra a rodada** (contando com os demais resultados), **atualiza** a `Leaderboard` de `Club` e `Player`, **registra os confrontos** realizados, para que não se repitam e **registra** os dados do `Player` (pontuação, vitórias, derrotas, empates, etc.).
- Ao fim do campeonato, o `Game` **registra** os títulos e demais informações do `Tournament` e **desabilita** ações para que o `Tournament` não prossiga.

## Subdomain

Auth, Playing*, Ranking

*: subdomain core, porque é o único que não pode ser terceirizado, no sentido de ser feito por libs/ferramentas externas

## Entities

- User [Auth]: pode ter `Admin`, `Editor` ou `Player` como `role`;
- Club [Playing]
- Game [Playing]
- Tournament [Ranking]
- Leaderboard [Ranking]

### Regras de Negócio

- User
  - Criar usuário
  - Verificar se usuário já existe

## Use Cases

- User
  - se registra; escolhe formato do torneio; inicia novo torneio; registra torneio no histórico; inicia rodada; escolhe a categoria; escolhe as opções; se escolher `legends`, escolhe os atributos;
  - signUp(email: UserEmail, password: UserPassword, confirmPassword: UserPassword)
  - signIn(email: UserEmail, password: UserPassword)
  - signOut(authToken: JWTToken)
  - verifyEmail(emailVerificationToken: EmailVerificationToken)
  - changePassword(passwordResetToken: Token, password: UserPassword)
  
- Game: distribui os clubes baseado no formato escolhido, determinando os confrontos e rodadas; 


### User Admin

grantAccess(user, resource)
revokeAccess(user, resource)
CRUD User
CRUD Club
CRUD Game
CRUD Tournament
CRUD Leaderboard

### Club

GetClubByID(id: string)
GetAllClubs(filter?: string)

## Events
## Repositories