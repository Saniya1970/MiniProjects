import React, { useState } from 'react';

// Sample list of products
const products = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop for gaming and work', price: 50000 },
    { id: 2, name: 'Smartphone', description: 'Feature-rich smartphone with 5G support', price: 30000 },
    { id: 3, name: 'Headphones', description: 'Noise-canceling headphones with great sound quality', price: 2000 },
    { id: 4, name: 'Camera', description: 'High-quality camera for photography enthusiasts', price: 25000 },
];

// Component to display product details with toggle functionality
const Product = ({ name, description, price }) => {
    const [showDetails, setShowDetails] = useState(false); // Toggle state

    return (
        <div className="product">
            <h3>{name}</h3>
            <p>Price: ₹{price}</p>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && <p>Description: {description}</p>}
        </div>
    );
};

// Main component to display all products
const ToggleProductDetails = () => {
    return (
        <div>
            <h1>Product List</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToggleProductDetails;


