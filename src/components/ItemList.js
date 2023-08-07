import { CON_URL } from "../utils/constants";

const ItemList = ({ items, toggleBtn, filteredData }) => {
  return (
    <div>
      {(toggleBtn ? filteredData : items).map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - Rs. {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img src={CON_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
