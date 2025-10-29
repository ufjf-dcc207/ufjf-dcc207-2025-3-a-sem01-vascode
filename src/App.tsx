import "./App.css";
import Jogos from "./Jogos";
import clashroyale from "./assets/clashroyale.jpg";

function App() {
  return (
    <div>
      <h1>Jogos</h1>

      <Jogos
        titulo="Clash Royale"
        imagem={clashroyale}
        estilo="Estratégia"
        plataforma="Mobile"
        desenvolvedora="Supercell"
        nota={9.4}
        descricao="Clash Royale é um jogo de estratégia em tempo real 
      para celulares que combina elementos de jogos de cartas colecionáveis, defesa de torre e arena de batalha. Os jogadores montam um baralho de oito cartas para destruir as torres do oponente, 
      usando um recurso chamado elixir para invocar tropas e magias. O jogo também inclui um sistema de clãs, onde jogadores podem se unir, conversar e batalhar juntos."
      />

      <Jogos
        titulo={undefined}
        imagem={undefined}
        estilo={undefined}
        plataforma={undefined}
        desenvolvedora={undefined}
        nota={0}
        descricao={undefined}
      />

      <Jogos
        titulo={undefined}
        imagem={undefined}
        estilo={undefined}
        plataforma={undefined}
        desenvolvedora={undefined}
        nota={0}
        descricao={undefined}
      />

      <Jogos
        titulo={undefined}
        imagem={undefined}
        estilo={undefined}
        plataforma={undefined}
        desenvolvedora={undefined}
        nota={0}
        descricao={undefined}
      />

      <Jogos
        titulo={undefined}
        imagem={undefined}
        estilo={undefined}
        plataforma={undefined}
        desenvolvedora={undefined}
        nota={0}
        descricao={undefined}
      />

      <Jogos
        titulo={undefined}
        imagem={undefined}
        estilo={undefined}
        plataforma={undefined}
        desenvolvedora={undefined}
        nota={0}
        descricao={undefined}
      />

    </div>
  );
}

export default App;