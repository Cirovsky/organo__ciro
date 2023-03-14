import Card from "../Card";
import './Time.css';
import { corTime } from "./coresTimes";

const Time = (props) => {
    
    console.log(props);
    const arrayCard = props.arrayCard;
    let destaque = "";
    let fundo = "";
    corTime.forEach( cor =>{
        if(cor.nome == props.id){
            destaque = cor.destaque;
            fundo = cor.fundo;
        }
    }

    )
           
        return (
        <div className="container__time" id={props.id} style={{backgroundColor: fundo}}>
            <h2>{props.titulo}</h2>
            <div className="tracinho__time" style={{backgroundColor: destaque}}></div>
            <ul className="card__setor__lista" key={props.titulo}>
                {arrayCard.map(card => <Card nome={card.nome} cargo={card.cargo} corDestaque={destaque}/>)}
            </ul>


        </div>
    )
}

export default Time;