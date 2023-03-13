import "./CampoSelecionar.css"

const CampoSelecionar = (props) => {
    const times = props.times;
    const exibirListaTimes = times.map(time => <option key={time}>{time}</option>);
    console.log(times)
    return(
        <div className="cria-card__linha">
            <label htmlFor={props.id}>{props.name}</label>
            <select id={props.id} name={props.name} className="selecionar">
                {exibirListaTimes}
            </select>
        </div>
        
    )
}
export default CampoSelecionar;