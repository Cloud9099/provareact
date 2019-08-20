import React from 'react'
import axios from 'axios'

class Filmes extends React.Component {
  state = {
    deputados: []
  }

  async componentDidMount() {
    const response = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/`)
    this.setState({
      deputados: response.data
    }) 
    
  }

  render() {
    console.log(this.state.deputados.dados)
    return(
      <div>
        { this.state.deputados.dados === undefined ? <h3>aguarde</h3>
          :
          this.state.deputados.dados.map(deputado => (
            <div key={deputado.email}>
              <img
              className="avatar"
              src={deputado.urlFoto}
              alt={deputado.nome}
            />
            <h3>{deputado.nome}</h3>
            <h3>{deputado.email}</h3>
            <h4>{deputado.siglaPartido}</h4>
            <h6>{deputado.siglaUf}</h6>
            <span>Email</span> {deputado.email}
            <hr/>
            </div>
          ))        
          
        }
        
      </div>
    )
  }
}

export default Filmes