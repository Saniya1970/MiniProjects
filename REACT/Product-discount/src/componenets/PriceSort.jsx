import React, { useState } from 'react';

// Sample list of products
const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Smartphone', price: 30000 },
    { id: 3, name: 'Headphones', price: 2000 },
    { id: 4, name: 'Camera', price: 25000 },
];

// Component to display product details
const Product = ({ name, price }) => {
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>Price: ₹{price}</p>
        </div>
    );
};

// Main component for sorting products
const SortedProductList = () => {
    const [sortOrder, setSortOrder] = useState('asc'); // Sort order state

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Sort products based on selected order (asc or desc)
    const sortedProducts = [...products].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return (
        <div>
            <h1>Product List</h1>
            <select onChange={handleSortChange} value={sortOrder}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>

            <div className="product-list">
                {sortedProducts.map((product) => (
                    <Product key={product.id} name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
};

export default SortedProductList;
