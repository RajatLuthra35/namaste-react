import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
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
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}

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
