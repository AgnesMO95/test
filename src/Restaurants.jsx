import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

function Restaurants() {
  const [data, setData] = useState([]);

  var requestOptions = {
    method: "GET",
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

  function getRandom(list) {
    const random = list[Math.floor(Math.random() * list.length)];
    console.log(random);
    return random;
  }

  return (
    <div className="restaurants">
      <h1> Restauranter i Trondheim </h1>
      <div className="retaurants-wrapper">
        <button className="random-button" onClick={() => getRandom(data)}>
          random restaurant
        </button>
        {data.length > 0 && (
          <>
            {data
              .sort((a, b) => a.total_karakter - b.total_karakter)
              .map((restaurant, index) => (
                <Restaurant key={index} restaurant={restaurant}></Restaurant>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Restaurants;
