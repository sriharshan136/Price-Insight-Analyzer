# Price Insight and Review Sentiment Analyzer

## Description

The **Price Insight and Review Sentiment Analyzer** is a full-stack web application designed to help users find detailed product information, compare prices, and analyze customer sentiment from various e-commerce platforms. This tool provides an easy-to-use interface that allows users to search for products by name, view relevant product details such as price, rating, and description, and make informed purchase decisions based on real-time data.

The application features:
- **Product Search**: Users can search for products by entering keywords or names.
- **Product Comparison**: Compare prices, ratings, and other details of similar products.
- **Sentiment Analysis**: Analyze customer reviews and sentiment to understand the overall user feedback.
- **Price Insights**: Get real-time price data and insights for the selected products.

This project is built using **React** on the frontend, and **Node.js/Express** on the backend. It uses APIs to fetch product details and customer reviews from various e-commerce websites (e.g., Amazon, eBay). The backend handles search queries, processes the data, and returns the relevant results to the frontend.

## Key Features

- **Search for Products**: Type the name or keyword of any product to get a list of results.
- **Product Details**: Display product name, price, rating, and a link to the product page.
- **Sentiment Analysis**: Analyze and display sentiment scores based on customer reviews.
- **Real-Time Data**: Fetch product data and pricing in real-time from external APIs.
- **Cross-Platform Compatibility**: Works across all modern web browsers.

## Tech Stack

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, Axios (for API calls)
- **API**: External product APIs (simulated for now)
- **Database**: (Optional) You can integrate a database to store user searches or product history.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/sriharshan136/Price-Insight-Analyzer.git

2. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install

3. Install dependencies for the backend:

   ```bash
   cd backend
   npm install

4. Start the backend server:

   ```bash
   npm run dev

5. Start the frontend application:

   ```bash
   cd frontend
   npm start

6. Visit the application in your browser at http://localhost:3000.

### Usage

- Open the application in your browser.
- Use the Search Bar to type the name or keyword of a product.
- View the list of products along with their price, rating, and link to the product page.
- (Optional) Sentiment analysis and insights are displayed for the selected products.

### Future Enhancements

- Integrate real APIs for real-time product data.
- Add product filters (e.g., by price range, rating, etc.).
- Implement user authentication and allow users to save product searches.
- Add advanced sentiment analysis features and graphs.

### License

- This project is licensed under the MIT License.

