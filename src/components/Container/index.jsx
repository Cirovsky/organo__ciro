import "./Container.css"
import Time from "../Time";

function Container(props){
    class time{
        constructor(titulo){
            this.titulo = titulo;
            this.id = this.normalizar(titulo);
            this.arrayCard = [];
        }
        normalizar(texto){
            return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(" ").join("");
        }
    }

    const arrayTime =[];
    const colaboradores = localStorage.getItem('colaboradores')? JSON.parse(localStorage.colaboradores): false;

    function initCards(){
        const titulosTime = props.times.map(time => time.nome);
        titulosTime.forEach(titulo => {
            arrayTime.push(new time(titulo));
        });
        colaboradores.forEach(card => {
            if(titulosTime.includes(card.time)){
                const index = titulosTime.indexOf(card.time);
                arrayTime[index].arrayCard.push(card);
            }
        })
        console.log(arrayTime.map(time=> time.arrayCard));
        
    }
    if(colaboradores != false){
        initCards();
    }
    
    /* if(props.card){
        if(titulosTime.includes(props.card.time)){
            const index = titulosTime.indexOf(props.card.time);
            arrayTime[index].arrayCard.push(props.card);
        }else{
            arrayTime.push(new time(props.card.time));
            arrayTime[arrayTime.length -1].arrayCard.push(props.card);
        }
    } */

    return(
        <div className="container">
            {arrayTime.map( time => <Time key={time.id} titulo={time.titulo} id={time.id} arrayCard={time.arrayCard} times = {props.times}/>)}
        </div>
    )
}
export default Container;