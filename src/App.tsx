import "./App.css";
import Jogos from "./Jogos";
import descricoes from "./data/descricoes";

function App() {
  const jogo01 = [
    <Jogos titulo="Clash Royale"
        ano={2016}
        imagem={undefined}
        estilo="Estratégia"
        plataforma="Mobile"
        desenvolvedora="Supercell"
        nota={9.4}
        descricao = {descricoes.clashRoyale}/>
  ];
  const jogo02 = [
        <Jogos
        titulo={undefined}
        imagem={undefined}
        estilo={undefined}
        plataforma={undefined}
        desenvolvedora={undefined}
        nota={0}
        descricao={undefined}
      />
  ];
  return (
    <div>
      <h1>Jogos</h1>
      <div>{jogo01}</div>
      <div>{jogo02}</div>      
    </div>
  );
}

export default App;