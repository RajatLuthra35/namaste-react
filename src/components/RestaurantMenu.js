import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  // const [resMenu, setResMenu] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);

  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL(resId));
  //   const json = await data.json();
  //   setResInfo(json.data);
  //   setResMenu(
  //     json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards
  //   );
  // };
  const resInfo = useRestaurantMenu(resId);
  // const resMenu =
  //   resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards;

  const categories =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={() => {
          setToggleBtn(!toggleBtn);
        }}
      >
        Veg Only
      </button>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          toggleCLicked={toggleBtn}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} // IMPORTANT THE WAY WE ARE SENDING i was sending both showIndex and setShowIndex separate and in RestaurantCategory i was doing setShowIndex(index) in handleClick as i had index and setShowIndex as props in that component, rather than we can directly do the way done right here.
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
