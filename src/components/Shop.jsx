import { ShoppingItem } from "./ShoppingItem"

export const Shop = () => {
    return (
        <>
            <div className="items">
                <ShoppingItem id={1}/>
                <ShoppingItem id={2}/>
                <ShoppingItem id={3}/>
                <ShoppingItem id={4}/>
                <ShoppingItem id={5}/>
            </div>
        </>
    )
}