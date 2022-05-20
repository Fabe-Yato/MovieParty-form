import batmanPoster from '../assets/imgs/batman-poster.jpg';
import doutorEstranho from '../assets/imgs/doutor-estranho.jpg';
import cidadePerdida from '../assets/imgs/cidade-perdida.jpg';

const Apresentacao = () =>{
    return(
        <aside className="apresentacao">
            <h1>Faça sua conta gratuitamente</h1>
            <p>Tenha acesso aos melhores lançamentos saidos direto do cinema</p>
            <div className="poster-filmes">
                <img className="poster-secundario" src={doutorEstranho} alt="doutor estranho poster" />
                <img className="poster-principal" src={batmanPoster} alt="batman poster" />
                <img className="poster-secundario" src={cidadePerdida} alt="cidade perdida poster" />
            </div>
            <h3>Os melhores do cinema, direto na sua casa</h3>
        </aside>
    )
}

export default Apresentacao;
