import './Rodape.css';

const Rodape = ()=>{
    return(
        <footer className="rodape">
            <img src="/images/rodape/triangulo1.svg" alt="triangulo" id='triangulo1'/>
            <a href='#' id='fb'>
                <img src="/images/fb.png" alt="facebook" />
            </a>
            <a href='#' id='tw'>
                <img src="/images/tw.png" alt="twitter"/>
            </a>
            <a href='#' id='ig'>
                <img src="/images/ig.png" alt="instagram" />
            </a>
            <img src="/images/rodape/triangulo2.svg" alt="triangulo" id='triangulo2'/>
            
            <a href='#' id='logo'>
                <img src="/images/logo.png" alt="logo"/>
            </a>
            <img src="/images/rodape/circulo3.svg" alt="circulo" id='circulo3'/>
            <a href='#' id="rodape__texto">
                <p>Desenvolvido por Alura</p>
            </a>
            <img src="/images/rodape/circulo4.svg" alt="circulo" id='circulo4'/>
        </footer>
    )
}

export default Rodape;