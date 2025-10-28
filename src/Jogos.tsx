import './jogos.css';

type JogosProps = {
  titulo: string;
  imagem: any;
  estilo: string;
  plataforma: string;
  desenvolvedora?: string;
  nota: number;
  descricao: string;
}

export default function Jogos ({
  titulo = 'Título não disponível',
  imagem = 'Imagem não disponível',
  estilo = 'Estilo não disponível',
  plataforma = 'Plataforma não disponível',
  desenvolvedora = 'Desenvolvedora não disponível',
  nota = 0,
  descricao = 'Descrição não disponível',
}: JogosProps) {
  return (
    <div className='jogos'>
      <div className='Titulo'>{titulo}</div>
      <div className='Imagem'><img src={imagem} alt={titulo} style={{ maxWidth: '300px' }} /></div>
      <div className='Estilo'>{estilo}</div>
      <div className='Plataforma'>{plataforma}</div>
      <div className='Desenvolvedora'>{desenvolvedora}</div>
      {nota > 0 ? (<div className='Nota'>{nota}</div>) : (<div className='Nota'>Nota não disponível</div>)}
      <div className='Descricao'>{descricao}</div>
    </div>
  )
}