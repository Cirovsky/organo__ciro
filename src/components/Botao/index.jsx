import "./Botao.css";

const Botao = (props) =>{
    return(
        <button className={`${props.className? props.className : "cria-card__botao"}`}>
            {props.children}
        </button>
    )
}
export default Botao;