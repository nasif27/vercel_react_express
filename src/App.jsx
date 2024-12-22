import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState(""); // State to store the API message
  
  useEffect(() => {
    // Fetch message from the Express API
    fetch("https://vercel-express-api-lilac.vercel.app/")
      .then((response) => response.text())
      .then((data) => setMessage(data)) // Store the message from API in state
      .catch((error) => console.error("Error fetching the message:", error));

  }, []);

  return (
    <>
      {/* Display the message from the Express API */}
      <p className='read-the-docs'>
        {message ? message : "Loading message..."}
      </p>
    </>
  );
}


export default App;
