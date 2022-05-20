import popcorn from '../assets/imgs/popcorn.png';

const Cadastro = () =>{
    return(
        <aside className="cadastro">
           <header>
                <div className="popcorn">
                    <img src={popcorn} alt="popcorn" />
                </div>
                <div className="logo">
                    <h1>MovieParty</h1>
                    <div></div>
                    <p>Assista seus filmes favoritos</p>
                </div>               
           </header>
           <main className="formulario-cadastrar">
               <h1>Entre com sua conta</h1>
               <form>
                   <label htmlFor="email-user">Email</label> <br />
                   <input type="email" 
                   name="email-user" 
                   id="email-user" required/> <br />

                   <label htmlFor="password-user">Password</label> <br />
                   <input type="password" 
                   name="password-user" 
                   id="password-user" required/> <br />

                   <a href="#">Esqueci minha senha</a> <br />
                   <input type="button" value="Entrar" />
                   <p>ou <a href="#">crie uma conta agora</a></p>
                   <input type="checkbox" name="" id="" />
               </form>
           </main>
        </aside>
    )
}

export default Cadastro;
