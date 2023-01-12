import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const fetchRestaurantData = () => {
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.entries))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);
  console.log(data);

  return (
    <div className="App">
      <p className="read-the-docs">Helo world!</p>
      {data.length > 0 && (
        <ul>
          {data
            .sort((a, b) => a.total_karakter - b.total_karakter)
            .map((restaurant, index) => (
              <li key={index}>
                {restaurant.navn} karakter: {restaurant.total_karakter}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default App;
