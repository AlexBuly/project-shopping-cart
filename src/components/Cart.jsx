import { useOutletContext } from "react-router-dom";

export const Cart = () => {
    const { cartItems, removeFromCart } = useOutletContext();
    const total = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0)
    return (
        <>
            <h2>Your Cart</h2>
            {cartItems.length === 0 && <p>No items yet.</p>}
            {cartItems.map((item, i) => (
                <p key={i}>
                    <b>{item.title} x {item.quantity}</b>{' '}
                    {'$'}{ item.price * item.quantity }
                    <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                </p>
            ))}
           {cartItems.length === 0 ? <b>Total: $0 </b> : <b>Total: ${total.toFixed(2)} </b>}
        </>
    )
}