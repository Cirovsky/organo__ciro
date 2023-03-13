import Campo from "./Campo";
import Botao from "./Botao";
import "./Card.css";
function Card(){
    return(
            <form className="cria-card">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo type={"text"} id={"Nome"} name={"Nome"} placeholder={"Digite seu nome"}/>
                <Campo type={"text"} id={"Cargo"} name={"Cargo"} placeholder={"Digite seu cargo"}/>
                <Campo type={"url"} id={"Imagem"} name={"Imagem"} placeholder={"Informe o endereço da imagem"}/>
                <Botao type={"submit"} value={"Criar Card"} className={"criar-card__botao"}
                />
            </form>
    );
}
export default Card;