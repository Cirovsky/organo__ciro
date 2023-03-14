import "./CampoSelecionar.css"


const CampoSelecionar = (props) => {
    const aoSelecionar = (e) =>{
        props.aoAlterar(e.target.value);
    }
    const times = props.times;
    const exibirListaTimes = times.map(time => <option key={time}>{time}</option>);
    return(
        <div className="cria-card__linha">
            <label htmlFor={props.id}>{props.name}</label>
            <select onClick={aoSelecionar}  id={props.id} name={props.name} className="selecionar">
                {exibirListaTimes}
            </select>
        </div>
        
    )
}
export default CampoSelecionar;