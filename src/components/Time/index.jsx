import Card from "../Card";
import './Time.css';

const Time = (props) => {
    const arrayCard = props.arrayCard;
    let destaque = "";
    let fundo = "";
    props.times.forEach( cor =>{
        if(cor.nome == props.titulo){
            destaque = cor.destaque;
            fundo = cor.fundo;
        }
    }

    )
           
        return (
        <section className="container__time" id={props.id} style={{backgroundColor: fundo, 
        display: `${props.arrayCard.length > 0? 'flex': 'none'}`}}>
            <h2>{props.titulo}</h2>
            <div className="tracinho__time" style={{backgroundColor: destaque}}></div>
            <ul className="card__setor__lista">
                {arrayCard.map(card => <Card 
                                            key={card.nome+card.cargo} 
                                            nome={card.nome} cargo={card.cargo} 
                                            corDestaque={destaque} 
                                            imagem = {card.imagem}/>)}
            </ul>


        </section>
    )
}

export default Time;