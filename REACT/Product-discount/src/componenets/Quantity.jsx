import React, { useState } from 'react';

// Sample list of products
const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Smartphone', price: 30000 },
    { id: 3, name: 'Headphones', price: 2000 },
];

// Component to display product details with quantity adjustment
const Product = ({ name, price }) => {
    const [quantity, setQuantity] = useState(1); // Quantity state

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="product">
            <h3>{name}</h3>
            <p>Price: ₹{price}</p>
            <div>
                <button onClick={decrementQuantity}>-</button>
                <span> {quantity} </span>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <p>Total: ₹{(price * quantity).toFixed(2)}</p>
        </div>
    );
};

// Main component to display all products
const ProductQuantityList = () => {
    return (
        <div>
            <h1>Product List</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product key={product.id} name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
};

export default ProductQuantityList;

