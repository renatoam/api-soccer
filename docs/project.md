# The Biggest Club

O jogo consiste de um jogador que escolhe um clube e compara os atributos desse clube com outros clubes (que também são comparados entre si) superando-os em batalha até que tenha enfrentado todos. Ao final, o clube com mais pontos, se torna o campeão.

O jogador só poderá escolher uma categoria por adversário. As opções escolhidas dessa categoria são limitadas em 3, ou seja, 3 turnos por rodada. Os pontos definidos pra cada opção é definida pelo jogo e seus critérios ficarão registrados em algum menu de ajuda.

A quantidade de rodadas até o fim do torneio é definida pela quantidade de times registrados e qual formato escolhido pelo jogador, se pontos corridos ou mata-mata. Se o formato escolhido for pontos corridos, cada clube terá que jogar a quantidade de clubes menos um (ele mesmo) pra chegar ao fim. Caso o formato seja de mata-mata, cada rodada tem um clube eliminado, até que sobrem apenas dois, que farão a grande final.

Ao final do jogo, a leaderboard e as pontuações são resetadas e um novo jogo é iniciado. O histórico de jogos e títulos são mantidos para consultas futuras.

## O jogo

- O `Player` se **registra** e **escolhe um clube** favorito.
- O `Player` **escolhe o formato** do `Tournament` que quer iniciar.
- O `Player` **inicia** um novo `Tournament`.
- O `Game` **registra o `Tournament`** no histórico (com id, registro único).
- O `Game` **distribui os clubes** no formato correto. Em formato de mata-mata, um clube precisa ser removido (a princípio).
- O `Player` **inicia uma rodada**.
- O `Player` **escolhe uma categoria** do `Club` e **escolhe as opções** (3) dessa categoria.
- O `Player` **escolhe um adversário** pra enfrentar.

- O `Game` **determina outros jogos** aleatoriamente (baseado em confrontos disponíveis).
- O `Game` **seleciona aleatoriamente** qual `Player` (ou CPU) começa a rodada.
- O `Player` escolhido (ou a CPU) **escolhe uma opção** (dentre as 3 previamente selecionadas) pra comparar. Se o escolhido for a CPU, a opção é escolhida aleatoriamente.
- O `Game` **compara os valores** das opções de cada clube, **exibe o resultado** e **credita os pontos** da rodada.
- O `Game` **registra a rodada** (contando com os demais resultados), **atualiza** a `Leaderboard` de `Club` e `Player`, **registra os confrontos** realizados, para que não se repitam e **registra** os dados do `Player` (pontuação, vitórias, derrotas, empates, etc.).
- Ao fim do campeonato, o `Game` **registra** os títulos e demais informações do `Tournament` e **desabilita** ações para que o `Tournament` não prossiga.

## Subdomain

Club, Player, Comparing, Leaderboard, Score

## Use Cases

### Club

GetClubByID(id: string)
GetAllClubs(filter?: string)
