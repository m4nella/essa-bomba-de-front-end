import estilos from './Conteudo.module.css'
import {Lista} from '../paginas/Lista';



export function Conteudo(){
    return(
        <main className={estilos.conteiner}>
           <Lista/>       
            
        </main>
    )

}