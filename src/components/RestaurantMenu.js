import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuItem from "./RestaurantMenuItem";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL(resId));
    const json = await data.json();
    setResInfo(json.data);
    setResMenu(
      json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const iterateMenuItem = (value) => {
    return value.map((item) => {
      return (
        <RestaurantMenuItem
          key={item?.card?.info?.id}
          id={item?.card?.info?.id}
          name={item?.card?.info?.name}
          price={item?.card?.info?.price / 100}
          isVeg={item?.card?.info?.isVeg ? item?.card?.info?.isVeg : false}
        />
      );
    });
  };

  const vegMenu = () => {
    if (toggleBtn) {
      const vegItems = resMenu.filter((item) => {
        return item.card.info.isVeg;
      });
      return iterateMenuItem(vegItems);
    } else {
      return iterateMenuItem(resMenu);
    }
  };

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <button
        onClick={() => {
          setToggleBtn(!toggleBtn);
        }}
      >
        Veg Only
      </button>
      <h2>Menu</h2>
      <ul>{vegMenu()}</ul>
    </div>
  );
};

export default RestaurantMenu;
