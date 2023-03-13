import "./index.css"
import Time from "../Time";

function Container(props){
    console.log(props);
    class time{
        constructor(titulo){
            this.titulo = titulo;
            this.id = titulo;
            this.arrayCard = [];
        }

    }
    const arrayTime =[];
    const titulosTime = arrayTime.map(time => time.titulo);
    if(props.card){
        if(titulosTime.includes(props.card.time)){
            const index = titulosTime.indexOf(props.card.time);
            arrayTime[index].arrayCard.push(props.card);
        }else{
            arrayTime.push(new time(props.card.time));
            arrayTime[arrayTime.length -1].arrayCard.push(props.card);
        }
    }

    return(
        <div className="container">
            {arrayTime.map( time => <Time titulo={time.titulo} arrayCard={time.arrayCard}/>)}
        </div>
    )
}
export default Container;