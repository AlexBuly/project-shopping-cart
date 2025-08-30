import '../styles/App.css'
import { useState } from 'react'

export const ShoppingItem = ({name, price}) => {
    const [count, setCount] = useState(0);
   
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <>
            <div className="shopping-items">
                <div className="item">
                    <p>Name: {name}</p>
                    <br />
                    <p>Price: {price}</p>
                    <div className="number-btns">
                        <button onClick={decrement}>-</button>
                        <p>{count}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}