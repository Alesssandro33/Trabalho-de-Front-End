import type { Filme } from '../types';

// Definimos que este componente espera receber um 'data' do tipo Filme
interface CardProps {
  data: Filme;
  onDelete: (id: string) => void; // Função que será chamada ao clicar em excluir
}

function Card({ data, onDelete }: CardProps) {
  return (
    <div style={{ border: '3px solid #ffe600ff', padding: '10px', borderRadius: '8px', width: '250px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <img src={data.imagem} alt={data.titulo} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
      <div>
        <h3>{data.titulo}</h3>
        <p>{data.genero} - {data.ano}</p>
      </div>
      
      <div style={{ display: 'flex', gap: '5px' }}>
        {/* Link para editar passando o ID do filme na URL */}
        <Link to={`/editar/${data.id}`} style={{ flex: 1, textAlign: 'center', background: '#ffc107', padding: '5px', borderRadius: '4px', textDecoration: 'none', color: 'black' }}>Editar</Link>
        
        <button onClick={() => onDelete(data.id)} style={{ flex: 1, background: '#dc3545', color: 'white', border: 'none', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>
          Excluir
        </button>
      </div>
    </div>
  );
}

// Import necessário para o Link funcionar dentro do Card
import { Link } from 'react-router-dom';

export default Card;