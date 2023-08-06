import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  /* 
  -------------BEFORE CUSTOM HOOK--------------------

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  if u dnt make filtered restaurants state so when you search once u will modify make list of restaurants and then if u search again u wont have all restuarants
  u will only have searched restaurants of before so u wont be able to search new restaurants, so we need to conserve the main list of restaurants and
  make another list of filtered list which has list all restaurants from api call.


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3603185&lng=76.44763209999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  */

  // ---------------- CUSTOM HOOK--------------------
  const listOfRestaurants = useRestaurant();
  const filteredRestaurants = useRestaurant();
  const onlineStatus = useOnlineStatus();

  const [searchText, setSearchText] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  const showResCard = (ResList) => {
    return ResList.map((restaurant) => {
      return (
        <Link
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}
        >
          <RestaurantCard resData={restaurant} />
        </Link>
      );
    });
  };

  const showResView = (toggleBtn) => {
    if (toggleBtn) {
      const filtered = listOfRestaurants.filter((res) => {
        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
      });
      return showResCard(filtered);
    } else {
      return showResCard(filteredRestaurants);
    }
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search  m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              setToggleBtn(!toggleBtn);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              // setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} /> 
  
          OLD METHOD
          */}
        {showResView(toggleBtn)}

        {/*
          SECOND WAY OF WRITING
            We can use index also as a key, as every time loop goes index inc so it become unique.
            THIS LOGICALLY LOOKS RIGHT BUT REACT OFFICIAL DOCUMENTATION ITSELF SAY NEVER USE INDEX AS KEY.
  
  
            {resList.map((restaurant,index) => {
            return (
              <RestaurantCard key={index} resData={restaurant} />
            );
          })} */}
      </div>
    </div>
  );
};

export default Body;
