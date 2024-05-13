import estilos from '.Perfil.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaPerfil = z.object({
    nome: z.string()
           .min(1, 'Informe um nome')
           .max(25, 'Máximo de 25 caracteres'),
    usuario: z.string()      
              .min(5, 'Mínimo de 5 caracteres')
              .max(10, 'Máximo de 10 caracteres'),
    senha: z.string()
            .min(8, 'Informe 8 caracteres')
            .max(8, 'Máximo de 8 caracteres')

})

export function Perfil(){
    
    const {
        register,
        handleSubmit, 
        formState: {errors}
    }= useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data){
        console.log(`Nome: ${data.nome}`)
        console.log(`Usuário: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }
}