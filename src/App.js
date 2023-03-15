import { Banner } from './components/Banner';
import Form from './components/Form';
import Botao from './components/Botao';
import Container from './components/Container';
import { useState } from 'react';
import { times } from './variables_javascript/times';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [formulario, setFormulario] = useState(false);
  const adicionarColaborador = colaborador =>{
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }

  const nomeTimes = times.map(time => time.nome);

  return (
    <>
      <Banner/>
      <main className="container">
        <Form aoSubmeter={adicionarColaborador} times = {nomeTimes} visualizar={formulario}/>
        <div className="container__titulo">
          <h2>Minha Organização</h2>
          <Botao className="botao__adicionar" visualizar={formulario} abrirForm={form => setFormulario(form)}>
            <img src='/images/addcolaborador.svg' className='botao_add-colaborador'/>
          </Botao>
          <div className="tracinho"></div>
        </div>

        <Container colaboradores={colaboradores} times = {times}/>
      </main>
    </>
  );
}

export default App;
