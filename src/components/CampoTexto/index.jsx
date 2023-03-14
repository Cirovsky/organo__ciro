import "./CampoTexto.css";

const CampoTexto = (props) =>{

    const aoDigitar = (e)=>{
        props.aoAlterar(e.target.value);
    }
    return(
        <div className="cria-card__linha">
            <label name={props.name} htmlFor={props.id}>{props.name}</label>
            <input value={props.valor} onChange={aoDigitar} type={props.type} id={props.id} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
        
    )
}
export default CampoTexto;