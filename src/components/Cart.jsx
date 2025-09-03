import { useOutletContext } from "react-router-dom";

export const Cart = () => {
    const { cartItems } = useOutletContext();
    return (
        <>
            <h2>Your Cart</h2>
            {cartItems.length === 0 && <p>No items yet.</p>}
            {cartItems.map((item, i) => (
                <p key={i}>
                    {item.title} x {item.quantity}
                </p>
            ))}
        </>
    )
}