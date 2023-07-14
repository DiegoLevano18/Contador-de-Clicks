//import './hojas-de-estilo/boton.css';
import './App.css';
import clickLogo from './img/logo_click2buy_blanc.png';
import Boton from "./componentes/Boton";
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarClic = () => {
    setNumClics(numClics * 0);
  };

  return (
    <div className="App">
      <div className='clic-logo-contenedor'>
        <img
          className='clic-logo'
          src={clickLogo}
          alt='Logo de Clicks'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarClic}
        />
      </div>
    </div>
  );
}

export default App;
