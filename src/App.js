import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from "react";


function App() {

  const [numClick, setNumClick] = useState(0);
  
  const manejarClick = () =>{
   setNumClick( numClick + 1);
  }

  const reiniciarContador = () =>{
   setNumClick(0);
  }

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img
          className='freeCodeCamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClick={numClick} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton 
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
