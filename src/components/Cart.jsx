import { useOutletContext } from "react-router-dom";

export const Cart = () => {
    const { cartItems, removeFromCart } = useOutletContext();
    const total = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0)
    return (
        <>
            <h2 className="cart-title">Your Cart:</h2>
            <div className="cart">
                {cartItems.length === 0 && <p>No items yet.</p>}
                {cartItems.map((item, i) => (
                    <p key={i} className="cart-item">
                        <img src={item.image} className="product-image" alt="product-image" />
                        <b>{item.title} x {item.quantity}</b>{' '}
                        <br />
                        {'$'}{ item.price * item.quantity }
                        <br />
                        <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                    </p>
                ))}
                 <h2>Total: ${total.toFixed(2)}</h2>
            </div>
        </>
    )
}