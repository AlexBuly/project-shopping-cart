In this project, I created a shopping cart app. The app contains three page: home, shop, and cart.

The home page contains a welcome message, image, and a link to the shop page.

The shop page contains 20 shopping items. Each item contains an a title, image, and price from an API. Below these items, are buttons to add/subtract the number of an individual item for the cart and a button which adds the items to the cart. 

All three pages contain a Navbar component at the top of the page. 

The cart items are created within the parent App.jsx component and passed down to Shop.jsx and Cart.jsx using the Outlet built-in component. The cart navbar link tracks how many unique items are in the cart. 

Lastly, routes are managed in main.jsx using react-router-dom. Individual routes are imported from a seperate file.

