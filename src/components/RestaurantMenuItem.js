const RestaurantMenuItem = (props) => {
  const { name, price, isVeg, id } = props;
  return (
    <li key={id} className="menu-item">
      <h6>{isVeg ? "Veg" : "Non-Veg"}</h6>
      <p>{name}</p>
      <p>Rs.{price}</p>
    </li>
  );
};

export default RestaurantMenuItem;
