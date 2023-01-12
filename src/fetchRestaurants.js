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
