const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulate product search data (Replace with real API request logic)
const simulateProductSearch = (query) => {
    // Simulated product data (Replace this with actual API call to fetch real data)
    const products = [
        { id: 1, name: `Product 1: ${query}`, price: '$100', rating: '4.5', link: 'https://example.com/product1' },
        { id: 2, name: `Product 2: ${query}`, price: '$200', rating: '4.0', link: 'https://example.com/product2' },
        { id: 3, name: `Product 3: ${query}`, price: '$300', rating: '3.5', link: 'https://example.com/product3' }
    ];
    return products;
};

// API route to handle product search
app.get('/api/products/search', (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    // Get products based on the search query (simulated data for now)
    const products = simulateProductSearch(query);

    res.json({ products });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
