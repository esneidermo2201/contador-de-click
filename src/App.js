import React from 'react';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClick: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClick }) => ({ numClick: numClick + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClick: 0 });
  }

  render() {
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
          <Contador numClick={this.state.numClick} />
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
