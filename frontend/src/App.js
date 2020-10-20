import React from 'react';

import logo from './assets/logo.svg'
import coffe from './assets/coffe.svg'
import './App.css'
import Formulario from './Form'

function App () {
    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>

          <div className="apresentation">
            <strong> Seja Bem-vindo! </strong>
          </div>
          <div className="slogan">
            <span>Café é sempre uma boa ideia </span>
            <img src={coffe} className="Coffe-image" alt="coffe"/>
          </div>
  
          <div className="pedido" >
            <h1> Faça seu Pedido </h1>
                  
            <Formulario />
          </div>

        </main>
      </div>
    );
  }

  export default App;