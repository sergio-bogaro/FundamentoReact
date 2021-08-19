import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
   
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [vacina, setVacina]= useState(false)

        function fornecerInformacoes(nome, idade,  vacina){
        setNome(nome)
        setIdade(idade)
        setVacina(vacina)
    }



    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{vacina ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}
