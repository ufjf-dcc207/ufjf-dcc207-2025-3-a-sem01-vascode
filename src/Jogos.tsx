import './Jogos.css';
import imagemPadrao from './assets/imagem-padrao.jpg';

type JogosProps = {
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
  imagem = imagemPadrao,
  estilo = 'Informação não disponível',
  plataforma = 'Informação não disponível',
  desenvolvedora = 'Informação não disponível',
  nota = 0,
  descricao = 'Informação não disponível',
}: JogosProps) {
  return (
    <div className='jogos'>
      <div className='Titulo'>{titulo}</div>
      <div className='Ano'>{ano}</div>
      <div className='Imagem'><img src={imagem} alt={titulo} style={{ maxWidth: '300px' }}/></div>
      <div className='Estilo'>{estilo}</div>
      <div className='Plataforma'>{plataforma}</div>
      <div className='Desenvolvedora'>{desenvolvedora}</div>
      {nota > 0 ? (<div className='Nota'>{nota}</div>) : (<div className='Nota'>—</div>)}
      <div className='Descricao'>{descricao}</div>
    </div>
  )
}