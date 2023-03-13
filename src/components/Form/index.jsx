import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import CampoSelecionar from "../CampoSelecionar";
import "./index.css";
function CriarCard(){
    
    const times = [
        "Programação", 
        "Front-End", 
        "DataScience", 
        "Devops", 
        "UX e Design", 
        "Mobile", 
        "Inovação e Gestão"]
    
    const capturarDados = (evento) =>{
        evento.preventDefault();
        console.log("formulário submetido");
    }
    
    return(
        <section>
            <form onSubmit={capturarDados} className="cria-card">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto type={"text"} id={"Nome"} name={"Nome"} placeholder={"Digite seu nome"} obrigatorio={true}/>
                <CampoTexto type={"text"} id={"Cargo"} name={"Cargo"} placeholder={"Digite seu cargo"}/>
                <CampoTexto type={"url"} id={"Imagem"} name={"Imagem"} placeholder={"Informe o endereço da imagem"}/>
                <CampoSelecionar name={"Time"} id={"seleciona-times"} times={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}
export default CriarCard;