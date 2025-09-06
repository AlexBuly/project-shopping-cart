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
                <ShoppingItem id={6} addItem={addToCart}/>
                <ShoppingItem id={7} addItem={addToCart}/>
                <ShoppingItem id={8} addItem={addToCart}/>
                <ShoppingItem id={9} addItem={addToCart}/>
                <ShoppingItem id={10} addItem={addToCart}/>
                <ShoppingItem id={11} addItem={addToCart}/>
                <ShoppingItem id={12} addItem={addToCart}/>
                <ShoppingItem id={13} addItem={addToCart}/>
                <ShoppingItem id={14} addItem={addToCart}/>
                <ShoppingItem id={15} addItem={addToCart}/>
                <ShoppingItem id={16} addItem={addToCart}/>
                <ShoppingItem id={17} addItem={addToCart}/>
                <ShoppingItem id={18} addItem={addToCart}/>
                <ShoppingItem id={19} addItem={addToCart}/>
                <ShoppingItem id={20} addItem={addToCart}/>
            </div>

        </>
    )
}