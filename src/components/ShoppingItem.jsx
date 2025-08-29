import '../styles/App.css'

export const ShoppingItem = ({name}) => {
    // individual item
    // contains, subtract, add, and description
    return (
        <>
            <div className="shopping-items">
                <div className="item">
                    <p>{name}</p>
                </div>
            </div>
        </>
    )
}