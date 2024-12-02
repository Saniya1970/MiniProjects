import React, { useState } from 'react';

// Sample list of products with categories
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000 },
    { id: 2, name: 'Shirt', category: 'Clothing', price: 2000 },
    { id: 3, name: 'Camera', category: 'Electronics', price: 25000 },
    { id: 4, name: 'Shoes', category: 'Footwear', price: 3000 },
    { id: 5, name: 'Smartphone', category: 'Electronics', price: 30000 },
];

// Component to display product details
const Product = ({ name, category, price }) => {
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Price: ₹{price}</p>
        </div>
    );
};

// Main component for product filtering
const FilteredProductList = () => {
    const [filter, setFilter] = useState('All'); // Filter state

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    // Filter products based on selected category
    const filteredProducts = products.filter(
        (product) => filter === 'All' || product.category === filter
    );

    return (
        <div>
            <h1>Product List</h1>
            <select onChange={handleFilterChange} value={filter}>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear</option>
            </select>

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilteredProductList;

