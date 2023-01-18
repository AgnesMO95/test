const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <h3>{restaurant.navn} </h3>
      <h4>{restaurant.adrlinje1}</h4>
      <p>karakter: {restaurant.total_karakter}</p>
    </div>
  );
};

export default Restaurant;
