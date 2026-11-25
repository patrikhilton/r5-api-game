import { useEffect } from "react"; // NEW: we need useEffect

function NameGame() {

  // NEW: the function that gets data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.nationalize.io?name=patrik");
      const data = await response.json();
      console.log(data);
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
    </div>
  );
}

export default NameGame;