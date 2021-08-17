import React from 'react'
import DiretaFilho from './DiretaFilho'


export default props => {
    return (
        <div>
            <DiretaFilho texto = 'Rogerinho' numero={24} bool={true}/>
            <DiretaFilho texto = 'Jefferson' numero={24} bool={false}/>
            <DiretaFilho texto = 'Oden' numero={41} bool={true}/>
        </div>
    )
}