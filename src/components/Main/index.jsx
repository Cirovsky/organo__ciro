import Form from "../Form";
import Container from "../Container";
import Botao from "../Botao";
import "./Main.css"
import { useState } from "react";

function Main(){
    const [card, setCard] = useState(false);
    return(
        <main className="container">
            <Form aoSubmeter = {(card)=> setCard(card)}/>
            <div className="container__titulo">
                <h2>Minha Organização</h2>
                <Botao className="botao__adicionar"/>
                <div className="tracinho"></div>
            </div>

            <Container card={card}/>
        </main>
    );
}

export default Main;