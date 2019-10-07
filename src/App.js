import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from "./contexts/ProductContext";
import  CartContext from "./contexts/CartContext";
import CartItemContext from "./contexts/CartItemContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = id => {
		const newItemArray = cart.filter(itemInCart => id !== itemInCart.id);
		setCart(newItemArray);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={cart}>
					<CartItemContext.Provider value={removeItem}>
						<Navigation />

						{/* Routes */}

						<Route
							exact
							path="/"
							component={Products}
						/>

						<Route
							path="/cart"
							component={ShoppingCart} />}
						/>
					</CartItemContext.Provider>
					
				</CartContext.Provider>
				
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
