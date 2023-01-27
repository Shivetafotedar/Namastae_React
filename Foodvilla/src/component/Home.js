import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./Constant";
import axios from "axios";
import Shimmer from "./Shimmer";
const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // restaurantList.map((item, index) => {
  //   return <RestaurantCard item={item} index = {index} title = {"title"} />
  // })
  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = () => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      )
      .then(function (response) {
        setAllRestaurants(response.data.data.cards[2].data.data.cards);
        setFilteredRestaurants(response.data.data.cards[2].data.data.cards);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFilter = () => {
    const res = allRestaurants.filter((data) => {
      console.log(data.data.name);
      if (data.data.name.toUpperCase().includes(searchText.toUpperCase())) {
        return true;
      }
      return false;
    });
    setFilteredRestaurants(res);
    console.log(res);
  };

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-3">
      <div className="d-flex ">
        <input
          className="form-control me-2"
          style={{ width: "25%" }}
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success mr-2" onClick={onFilter}>
          Search
        </button>
      </div>

      <div className="d-flex justify-content-center flex-wrap mt-3 ">
        {/* static data added in card */}
        {/* {restaurantList.map((item,index) => {
        return <RestaurantCard item={item} />;
      })} */}

        {filteredRestaurants.map((data) => {
          return <RestaurantCard item={data} />;
        })}
      </div>
    </div>
  );
};

export default Home;
