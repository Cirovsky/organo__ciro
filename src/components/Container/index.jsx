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
    const cards = localStorage.length > 0? JSON.parse(localStorage.cards): "";

    function initCards(){
        let titulosTime = []
        if(arrayTime.length > 0){
            titulosTime = arrayTime.map(time => time.titulo);
        }else{
            titulosTime.push(cards[0].time);
            arrayTime.push(new time(cards[0].time));
        }
        cards.forEach(card =>{
            if(titulosTime.includes(card.time)){
                const index = titulosTime.indexOf(card.time);
                arrayTime[index].arrayCard.push(card);
            }else{
                titulosTime.push(card.time);
                arrayTime.push(new time(card.time));
                arrayTime[arrayTime.length -1].arrayCard.push(card);
            }
        })
        
    }
    if(cards != ""){
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
            {arrayTime.map( time => <Time titulo={time.titulo} id={time.id} arrayCard={time.arrayCard}/>)}
        </div>
    )
}
export default Container;