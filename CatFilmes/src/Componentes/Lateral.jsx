import estilos from './Lateral.module.css'
import Ellie from '../assets/Ellie.webp'
import { Link } from 'react-router-dom'

export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
               
                <div className={estilos.perfil}>
                <img className={estilos.avatar} src={ Ellie }/>
                    <p>Ellie</p>
                </div>
            </header>
            <section>
                <Link
                    className={estilos.botao}
                    to='/inicial'>
                Filmes
                </Link>
                <Link
                    className={estilos.botao}
                    to='/inicial/perfil'>
                Perfil
                </Link>

            </section>
        </aside>
    )
}