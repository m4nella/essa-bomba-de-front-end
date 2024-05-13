export function Perfil(){
    return(
        <div className={estilos.container}>
            <p className={estilos.titulo}>Perfil</p>
            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                <input
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder="Nome"
                />
                {errors.nome && (
                    <p className={estilos.mensagem}>{errors.nome.message} </p>
                )}
                <input
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="Usuário"
                />
                {errors.usuario && (
                    <p className={estilos.mensagem}>{errors.nome.message} </p>
                )}
                <input
                    {...register('senha')}
                    className={estilos.campo}
                    placeholder="Senha"
                />
                {errors.senha && (
                    <p className={estilos.mensagem}>{errors.nome.message} </p>
                )}

                <button 
                    className={estilos.botao}
                    >Confirmar</button>
            </form>    
        </div>
    )
}