import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <div className="App">
      <p className="read-the-docs">Helo world!</p>
    </div>
  );
}

export default App;
