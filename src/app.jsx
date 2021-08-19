import "./App.css"
import React from 'react'

import ListaAlunos from "./Componentes/repeticao/ListaAlunos"
import ComParametro from './Componentes/Basicos/ComParametro'
import Fragmento from './Componentes/Basicos/Fragmento'
import NumeroAleatorio from './Componentes/Basicos/NumeroAleatorio'
import Primeiro from './Componentes/Basicos/Primeiro'
import Card from './Componentes/Layout/Card'
import Familia from "./Componentes/Basicos/Familia"
import FamiliaMembro from "./Componentes/Basicos/FamiliaMebro"
import TabelaProdutos from "./Componentes/repeticao/TabelaProdutos"
import ParOuImpar from "./Componentes/condicional/ParOuImpar"
import UsuarioInfo from "./Componentes/condicional/UsuarioInfo"
import DiretaPai from "./Componentes/comunicacao/DiretaPai"
import IndiretaPai from "./Componentes/comunicacao/IndiretaPai"
import Input from "./Componentes/formulario/Input"

export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
            
            <Card titulo="#11 - Componente controlado" color = "rgb(50, 7, 99)">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color = "rgb(69, 100, 24)">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color = "rgb(24, 69, 100)">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8 - Renderização Condicional" color = "rgb(100, 69, 24)">
                <UsuarioInfo usuario = {{nome: 'Alberto'}}/>
                <UsuarioInfo/>
                <ParOuImpar numero ={20}></ParOuImpar>
            </Card>


            <Card titulo="#7 - Tabela" color = "rgb(28, 98, 69)">
                <TabelaProdutos></TabelaProdutos>
            </Card>


            <Card titulo="#6 - Repetição" color = "rgb(06, 113, 111)">
                <ListaAlunos></ListaAlunos>
            </Card>

            

            <Card titulo="#5 - Componente com Filhos" color = "rgb(70, 10, 285)">
            <Familia sobrenome="Bogaro">
            <FamiliaMembro nome="Sergio"/>
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Marcos"/>
            <FamiliaMembro nome="Bianca"/>
            <FamiliaMembro nome="Rozy"/>
            </Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatorio" color = "rgb(40, 0, 85)">
            <NumeroAleatorio  n1 = {0}  n2 = {100}/>
            </Card>

            <Card titulo="#3 - Fragmento" color = "#E94C6F">
            <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parametro" color ="#321">
            <ComParametro  titulo="Velozes e Furiosos" subtitulo="Tokyo Drift"/>
            </Card>

            <Card titulo="#1 - Primeiro" color ="#123">
            <Primeiro></Primeiro>
            </Card>
            </div>
         </div>

    )
}