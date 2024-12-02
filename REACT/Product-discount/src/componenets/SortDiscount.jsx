import React from 'react';

// Sample list of products
const products = [
    { id: 1, name: 'Laptop', price: 50000, discount: 10 },
    { id: 2, name: 'Smartphone', price: 30000, discount: 15 },
    { id: 3, name: 'Headphones', price: 2000, discount: 5 },
    { id: 4, name: 'Camera', price: 25000, discount: 20 }
];

// Component to display a single product
const Product = ({ name, price, discount }) => {
    // Calculate final price after applying discount
    const discountedPrice = price - (price * discount) / 100;

    return (
        <div className="product">
            <h3>{name}</h3>
            <p>Original Price: ₹{price}</p>
            <p>Discount: {discount}%</p>
            <p>Final Price: ₹{discountedPrice.toFixed(2)}</p>
        </div>
    );
};

// Main component to display all products
const ProductList = () => {
    return (
        <div>
            <h1>Product List</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        discount={product.discount}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

