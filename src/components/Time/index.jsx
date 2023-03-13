import Card from "../Card";
import './Time.css'

const Time = (props) => {
    const arrayCard = props.arrayCard;
    
        return (
        <div className="container__time" id={props.id}>
            <h2>{props.titulo}</h2>
            <ul className="card__setor__lista" key={props.titulo}>
                {arrayCard.map(card => <Card nome={card.nome} cargo={card.cargo}/>)}
            </ul>
        </div>
    )
}

export default Time;