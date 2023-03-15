import "./Botao.css";

const Botao = (props) =>{
    const aoClicar = e=>{
        return props.visualizar? props.abrirForm(false) : props.abrirForm(true);
    }
    
    return(
        <button className={`${props.className? props.className : "cria-card__botao"}`}
            onClick={props.app? aoClicar : null}
>
            {props.children}
        </button>
    );
}
export default Botao;