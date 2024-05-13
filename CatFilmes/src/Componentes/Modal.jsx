import estilos from './Modal.module.css';
import axios from 'axios';
import { Card } from './Card';
import { Modal } from './Modal';

export function Lista(){
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
}

export function Modal({ movie, onClose }){
    return(
        <div className={estilos.modalBackdrop} onClick={onClose}>
            <div className={estilos.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>{movie.title}</h2>
                <img className={estilos.imgModal}
                     scr={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                     alt={movie.title} />
                <p/>
                <p>{movie.title}</p>
                <p/>
                <p>{`Popularidade: ${movie.popularity}`}</p>
                <p>{`Data de Lançamento: ${movie.release_data} `}</p>
                <p>{`Quantidade de Votos: ${movie.vote_count}`}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}