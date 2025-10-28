import "./App.css";
import Jogos from "./jogos";
import clashroyale from "./assets/clashroyale.jpg";

function App() {
  return (
    <div>
      <h1>Jogos</h1>

      <Jogos
        titulo="Clash Royale"
        imagem= {clashroyale}
        estilo="Estratégia"
        plataforma="Mobile(Android/IOS)"
        desenvolvedora="Supercell"
        nota={9.4}
        descricao="Clash Royale é um jogo de estratégia em tempo real 
      para celulares que combina elementos de jogos de cartas colecionáveis, defesa de torre e arena de batalha. Os jogadores montam um baralho de oito cartas para destruir as torres do oponente, 
      usando um recurso chamado elixir para invocar tropas e magias. O jogo também inclui um sistema de clãs, onde jogadores podem se unir, conversar e batalhar juntos."
      />

      <Jogos
        titulo="Valorant"
        imagem="xxx"
        estilo="Tiro em primeira pessoa (FPS)"
        plataforma="PC"
        desenvolvedora="Riot Games"
        nota={8.7}
        descricao='Valorant é um jogo de tiro tático em primeira pessoa (FPS)
       desenvolvido pela Riot Games. Lançado em 2020, o jogo combina elementos de jogos de tiro tradicionais com habilidades únicas de personagens chamados "agentes". 
       Cada agente possui um conjunto distinto de habilidades que podem ser usadas estrategicamente durante as partidas. Valorant é conhecido por sua jogabilidade competitiva,
        mapas bem projetados e ênfase na precisão e trabalho em equipe.'
      />

      <Jogos
        titulo="Minecraft"
        imagem="xxx"
        estilo="Sandbox, Aventura"
        plataforma="PC, Consoles, Mobile"
        desenvolvedora="Mojang Studios"
        nota={9.5}
        descricao="Minecraft é um jogo sandbox que permite aos jogadores explorar, construir e sobreviver em um mundo gerado proceduralmente feito de blocos. 
      Os jogadores podem minerar recursos, criar ferramentas e construir estruturas, além de enfrentar criaturas hostis. O jogo oferece modos de sobrevivência, onde os jogadores devem gerenciar sua saúde e fome, 
      e modos criativos, onde têm acesso ilimitado a recursos para construir livremente. Minecraft é conhecido por sua comunidade ativa, mods e servidores personalizados."
      />

      <Jogos
        titulo="The Witcher 3: Wild Hunt"
        imagem="xxx"
        estilo="RPG de Ação"
        plataforma="PC, Consoles"
        desenvolvedora="CD Projekt Red"
        nota={9.8}
        descricao="The Witcher 3: Wild Hunt é um RPG de ação em mundo aberto desenvolvido pela CD Projekt Red.
       Lançado em 2015, o jogo segue a história de Geralt de Rívia, um caçador de monstros conhecido como bruxo, enquanto ele busca por sua filha adotiva em um vasto mundo cheio de missões, personagens complexos e escolhas morais. 
       The Witcher 3 é elogiado por sua narrativa envolvente, gráficos impressionantes e jogabilidade profunda, tornando-se um dos jogos mais aclamados da década."
      />

    </div>
  );
}

export default App;
