import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/hello')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
      <div className="App">
          <HomePage />
      </div>
    );
}

export default App;
