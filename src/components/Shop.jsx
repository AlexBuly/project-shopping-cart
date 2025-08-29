import { ShoppingItem } from "./ShoppingItem"

export const Shop = () => {
    return (
        <>
            <div className="items">
                <ShoppingItem name="Shirt"/>
                <ShoppingItem name="Jacket"/>
                <ShoppingItem name="Micropave"/>
            </div>
        </>
    )
}