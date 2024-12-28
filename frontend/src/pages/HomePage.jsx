import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProducts = async (keyword) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/products/search`, {
                params: { query: keyword },
            });
            setProducts(response.data.products);
        } catch (err) {
            setError('Error fetching products');
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <div className="home-page">
            <h1>Price Insight and Review Sentiment Analyzer</h1>
            <SearchBar onSearch={fetchProducts} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ProductList products={products} />
        </div>
    );
};

export default HomePage;
