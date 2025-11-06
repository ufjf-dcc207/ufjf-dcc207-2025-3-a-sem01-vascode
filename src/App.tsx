import "./App.css";
import Jogos from "./Jogos";
import descricoes from "./data/descricoes";
import info from './data/info.json';

function App() {
  return (
   <div>
      <h1>Catálogo de Jogos</h1>
      <div className="grade-jogos">
        {info.map((jogo) => (
          <Jogos
            key={jogo.id}
            id={jogo.id}
            titulo={jogo.titulo}
            ano={jogo.ano}
            imagem={jogo.imagem}
            estilo={jogo.estilo}
            plataforma={jogo.plataforma}
            desenvolvedora={jogo.desenvolvedora}
            nota={jogo.nota}
            descricao={descricoes[jogo.descricaoKey]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;