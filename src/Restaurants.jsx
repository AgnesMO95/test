import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Restaurants() {
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
    <div className="restaurants">
      <h1> Restauranter i Trondheim </h1>
      <div className="retaurants-wrapper">
        <div className="restaurant-grid-restaurants-wrapper">
          {data.length > 0 && (
            <div>
              {data
                .sort((a, b) => a.total_karakter - b.total_karakter)
                .map((restaurant, index) => (
                  <div className="restaurant">
                    <p key={index}>
                      {restaurant.navn} karakter: {restaurant.total_karakter}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
