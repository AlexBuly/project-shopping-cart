import { ShoppingItem } from "./ShoppingItem";
import { useOutletContext } from "react-router-dom";

export const Shop = () => {
   const { addToCart } = useOutletContext();
    return (
        <>
            <div className="items">
                <ShoppingItem id={1} addItem={addToCart}/>
                <ShoppingItem id={2} addItem={addToCart}/>
                <ShoppingItem id={3} addItem={addToCart}/>
                <ShoppingItem id={4} addItem={addToCart}/>
                <ShoppingItem id={5} addItem={addToCart}/>
            </div>

        </>
    )
}