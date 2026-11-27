import { useState, useEffect } from "react";

function NameGame() {
  const [result, setResult] = useState(null);

  // NEW: the function that gets data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.nationalize.io?name=patrik");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // NEW: run fetchData once, when the page loads
  useEffect(() => {
    fetchData();
  }, []);

   return (
    <div>
      <h1>Guess the Country</h1>

      {result && (
        <div>
          <p>Name: {result.name}</p>
          <p>Most likely country: {result.country[0].country_id}</p>
        </div>
      )}
    </div>
  );
}

export default NameGame;