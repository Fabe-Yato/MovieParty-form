import popcorn from '../assets/imgs/popcorn.png';
import cinema from '../assets/imgs/cinema.webp'
const Cadastro = () =>{
    return(
        <aside className="cadastro">
           <header style={{backgroundImage: `url(${cinema})`}}>
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
                    <div className="inputs">
                        <label htmlFor="email-user"
                        className="label">Email</label> 
                        <br />
                        <input type="email" 
                        name="email-user" 
                        id="email-user"
                        placeholder="batman@gmail.com" required/>
                    </div>
                    <div className="inputs">
                        <label htmlFor="password-user"
                        className="label">Password</label>
                        <br />
                        <input type="password" 
                        name="password-user" 
                        id="password-user" 
                        placeholder="*******" required/> <br />

                        <a href="#">Esqueci minha senha</a> 
                    </div>
                    <div className="inputs">
                        <input type="button" value="Entrar" />
                    </div>
                    <div className="cadastrar">
                        <p>ou <a href="#">crie uma conta </a>agora</p>
                        <input type="checkbox" name="" id="" />
                    </div>
               </form>
           </main>
        </aside>
    )
}

export default Cadastro;
