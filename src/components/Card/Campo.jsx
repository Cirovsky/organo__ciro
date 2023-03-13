import "./Card.css"
function Campo (props){
    console.log(props.placeholder)
    return(
        <div className="cria-card__linha">
            <label name={props.name} htmlFor={props.id}>{props.name}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder}/>
        </div>
        
    )
}
export default Campo;