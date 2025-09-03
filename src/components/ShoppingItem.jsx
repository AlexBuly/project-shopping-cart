import '../styles/App.css'
import { useState, useEffect } from 'react'

export const ShoppingItem = ({id, addItem}) => {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [id])

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>;

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => Math.max(0, prevCount - 1));
    }

    return (
        <>
            <div className="shopping-items">
                <div className="item">
                    <p>{product.title}</p>
                    <br />
                    <img src={product.image} className="product-image" alt="product-image" />
                    <br />
                    <p>{product.price}</p>
                    <div className="number-btns">
                        <button onClick={decrement}>-</button>
                        <p>{count}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <button onClick={() => addItem(product, count)}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
