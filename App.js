import React, {Component} from 'react'
import './App.css'

import IndiretaPai from './IndiretaPai'
import Estado from './Estado'
import FamiliaClone from './FamiliaClone'
import FamiliaMembroClone from './FamiliaMembroClone'
import Aninhados from './Familia'
import Card from './Card'
import Propriedades from './Propriedades'
import OlaMundo from './OlaMundo'

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1>Exemplos React</h1>
            <div className="Cards">

                <Card titulo="Comunicação Indireta (de filho para pai)">
                    <IndiretaPai />
                </Card>
                <Card titulo="Estado" cor="#ffb400">
                    <Estado />
                </Card>
                <Card titulo="Componentens aninhados" cor="#d1495b">
                    <Aninhados sobrenome="Simpson" />
                </Card>   
                <Card titulo="Propriedades" cor="#91cb3e">
                <Propriedades nome="Homer" sobrenome="Jay Simpson" idade="38"/>
                </Card>
                <Card titulo="Olá Mundo!" cor="#226ce0" >
                <OlaMundo />
                </Card>
            </div>
            </div>    
        )
    }
}
export default App;