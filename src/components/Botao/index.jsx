import "./Botao.css";

const Botao = (props) =>{
    const aoClicar = e=>{
        return props.visualizar? props.abrirForm(false) : props.abrirForm(true);
    }
    
    return(
        <button className={`${props.className? props.className : "cria-card__botao"}`}
            onClick={aoClicar}
        >
            {props.children}
        </button>
    )
}
export default Botao;