import Form from "../Form";
import Container from "../Container";
import Botao from "../Botao";
import "./Main.css"

function Main(){
    return(
        <main className="container">
            <Form/>
            <div className="container__titulo">
                <h2>Minha Organização</h2>
                <Botao className="botao__adicionar"/>
            </div>
            <Container card={{setor: "programação", nome:"nome", cargo: "cargo"}}/>
        </main>
    );
}

export default Main;