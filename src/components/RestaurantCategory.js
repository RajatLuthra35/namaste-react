import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  toggleCLicked,
  showItems,
  setShowIndex,
}) => {
  const filteredItem = data?.itemCards.filter(
    (item) => item?.card?.info?.isVeg
  );

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} (
            {toggleCLicked ? filteredItem.length : data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && (
          <ItemList
            items={data.itemCards}
            filteredData={filteredItem}
            toggleBtn={toggleCLicked}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
