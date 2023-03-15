import "./Card.css";

function Card(props){
    const urlImage = props.imagem === ""? '/images/user.png' : props.imagem;
    return(
        <li className="card">
            <div className="card__banner" style={{background: props.corDestaque}}>
                <img src={urlImage} className="avatar" alt="imagem do avatar"/>
            </div>            
                <h3>{props.nome}</h3>
                <p>{props.cargo}</p>
        </li>
    );
}
export default Card;