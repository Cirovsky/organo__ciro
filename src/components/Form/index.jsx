import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import CampoSelecionar from "../CampoSelecionar";
import "./Form.css";
import { useState } from "react";

function Form(props){
    
    const colaboradores = localStorage.colaboradores? JSON.parse(localStorage.colaboradores) : [];
    
    const times = props.times;
    
        
        const [nome, setNome] = useState("");
        const [cargo, setCargo] = useState("");
        const [imagem, setImagem] = useState("");
        const [time, setTime] = useState(times[0]);
        
        const capturarDados = (evento) =>{
            evento.preventDefault();
            const colaborador = {
                nome : nome,
                cargo: cargo,
                imagem: imagem,
                time: time,
            };
            props.aoSubmeter(colaborador);
            colaboradores.push(colaborador);
            localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
            setNome("");
            setCargo("");
            setImagem("");
            setTime(times[0]);
        }
    return(
        <section className="formulario" style={{display: `${props.visualizar? 'block': 'none'}`}}>
            <form onSubmit={capturarDados} className="cria-card">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto type={"text"} id={"Nome"} 
                    name={"Nome"} 
                    placeholder={"Digite seu nome"} obrigatorio={true}
                    aoAlterar={valor => setNome(valor)} valor={nome}/>
                <CampoTexto type={"text"} id={"Cargo"} 
                    name={"Cargo"} 
                    placeholder={"Digite seu cargo"}
                    aoAlterar={valor => setCargo(valor)} valor={cargo}/>
                <CampoTexto type={"url"} id={"Imagem"} 
                    name={"Imagem"} 
                    placeholder={"Informe o endereço da imagem"}
                    aoAlterar={valor => setImagem(valor)} valor={imagem}/>
                <CampoSelecionar valor={time} name={"Time"} id={"seleciona-times"} times={times}
                    aoAlterar={valor=> setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}
export default Form;