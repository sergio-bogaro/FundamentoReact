

export default (props) => {

    const min = props.n1
    const max = props.n2

    const random = parseInt (Math.random() * (max -min) + min)
    return (
         <div> 
             <h1> Valor Aleatorio</h1>
             <p><strong>Minimo: </strong>{min}</p>
             <p><strong>Maximo: </strong>{max}</p>
             <p></p>
             <p><strong> {random} </strong></p>
             
         </div>
    )
}