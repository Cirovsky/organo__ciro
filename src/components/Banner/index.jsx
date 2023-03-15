import Botao from '../Botao'
import './Banner.css'

export const Banner = () =>{
    return (
        <header className="banner">
            {/* <Botao className="botao-invisivel__banner"/> */}
            <img src="/images/banner.png" alt="banner principal da página organo"/>
        </header>
    )
}