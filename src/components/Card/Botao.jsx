import "./Card.css";

function Botao (props){
    return(
        <input type={props.type} value={props.value} className="cria-card__botao"/>
    );
}
export default Botao;