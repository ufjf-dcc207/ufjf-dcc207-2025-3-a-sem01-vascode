import './Jogos.css';


type JogosProps = {
  id: number;
  titulo: string;
  ano: string | number;
  imagem: any;
  estilo: string;
  plataforma: string;
  desenvolvedora: string;
  nota: number;
  descricao: string;
}

export default function Jogos ({
  titulo = 'Título não disponível',
  ano = 'Ano não disponível',
  imagem = '/assets/imagem-padrao.jpg',
  estilo = 'Informação não disponível',
  plataforma = 'Informação não disponível',
  desenvolvedora = 'Informação não disponível',
  nota = 0,
  descricao = 'Informação não disponível',
}: JogosProps) {
  return (
    <div className='jogos'>
      <div className='Titulo'>{titulo}</div>
      <div className='Imagem'><img src={imagem} alt={titulo} style={{ maxWidth: '300px' }}/></div>
       <div className='info-container'>
        <div className='info-item'>
          <span>Ano:</span>
          <span>{ano}</span>
        </div>
        <div className='info-item'>
          <span>Estilo:</span>
          <span>{estilo}</span>
        </div>
        <div className='info-item'>
          <span>Plataforma:</span>
          <span>{plataforma}</span>
        </div>
        <div className='info-item'>
          <span>Desenvolvedora:</span>
          <span>{desenvolvedora}</span>
        </div>
        <div className='info-item'>
          <span>Nota:</span>
          <span className='Nota'>
            {nota > 0 ? `${nota}/10` : '—'}
          </span>
        </div>
      </div>
      <div className='Descricao'>{descricao}</div>
    </div>
  )
}