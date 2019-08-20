import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Deputados from './Deputados';
import Inicio from './Inicio';

function Main() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Inicio}/>
        <Route path='/deputados' exact component={Deputados}/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
