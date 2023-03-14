import "./Card.css";

function Card(props){
    return(
        <li className="card" key={props.nome}>
            <div className="card__banner" style={{background: props.corDestaque}}></div>
            <div className="card__dados">
                <img src=""/>
                <h3>{props.nome}</h3>
                <p>{props.cargo}</p>
            </div>
        </li>
    );
}
export default Card;