# The Biggest Club

O jogo consiste de um jogador que escolhe um clube de futebol e inicia um torneio, onde irá comparar os atributos desse clube com outros clubes (que também são comparados entre si) superando-os em batalha até que tenha enfrentado todos. Ao final, o clube com mais pontos, se torna o campeão.

O jogador escolhe uma categoria que valerá pra si e para o adversário. Cada rodada do torneio tem três turnos.

A quantidade de rodadas até o fim do torneio é definida pela quantidade de times registrados e qual formato de torneio escolhido pelo jogador, se pontos corridos ou mata-mata.

Se o formato escolhido for pontos corridos, cada jogador terá que jogar contra todos os adversários registrados no torneio. Caso o formato seja de mata-mata, cada rodada tem um clube eliminado, até que sobrem apenas dois, que farão a grande final.

O torneio tem uma quantidade mínima de jogadores pra poder iniciar, sendo assim, clubes que não possuem jogadores registrados serão controlados pela CPU.

No decorrer do torneio, uma leaderboard será constantemente atualizada com a pontuação dos clubes.

Ao final do jogo, a leaderboard e as pontuações são resetadas e um novo torneio poderá ser iniciado. O histórico de jogos e títulos são mantidos para consultas futuras.

Assim como nas regras do futebol oficial a pontuação segue os seguintes critérios:

- **Vitória**: 3 pontos
- **Empate**: 1 ponto
- **Derrota**: 0 pontos

Os critérios de desempate são (nesta ordem): `vitórias`, `confronto direto`, `quantidade de lendas`.
