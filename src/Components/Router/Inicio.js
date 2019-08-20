import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navegação extends Component{
    render() {
        return(
         <Link to='/deputados'><h3>Deputados</h3></Link>
        );
    }
}
export default Navegação;
