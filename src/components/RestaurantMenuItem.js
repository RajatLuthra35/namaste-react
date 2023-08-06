const RestaurantMenuItem = (props) => {
  const { name, price, isVeg, id } = props;
  return (
    <li
      key={id}
      className="border border-solid border-black m-4 p-4 rounded-lg bg-gray-100"
    >
      <h6>{isVeg ? "Veg" : "Non-Veg"}</h6>
      <p>{name}</p>
      <p>Rs.{price}</p>
    </li>
  );
};

export default RestaurantMenuItem;
