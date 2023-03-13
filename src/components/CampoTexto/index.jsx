import "./CampoTexto.css";
import {useState} from 'react';

const CampoTexto = (props) =>{
    const [valor, setValor] = useState("");
    
    const aoDigitar = (evento)=>{
        setValor(evento.target.value);
    }
    return(
        <div className="cria-card__linha">
            <label name={props.name} htmlFor={props.id}>{props.name}</label>
            <input value={valor} onChange={aoDigitar} type={props.type} id={props.id} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
        
    )
}
export default CampoTexto;