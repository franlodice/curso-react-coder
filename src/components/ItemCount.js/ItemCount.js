import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

const decrement = () => {
    if (count>0) {
        setCount (count-1)
    }
}

const increment = () => {
    if (count < stock) {
    setCount (count+1)
    } else  {
        alert("No hay mas stock")
    }
    
}



return(
    <>
        <div className="contador">
        <button onClick={decrement}>-</button>
        <h3>{count}</h3>
        <button onClick={increment}>+</button>
        </div>
        <div className="mainButton">
        <button onClick={()=> onAdd(count)}>Agrega al Carrito</button>
        </div>
    </>
)
}

export default ItemCount