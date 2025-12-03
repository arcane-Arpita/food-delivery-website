// src/context/UserContext.jsx
import { useState, useEffect } from "react";
import DataContext from "./dataContext";
import foodItemsData from "../food"; // ensure src/food.js exists

function UserContext({ children }) {
  const [input, setInput] = useState(""); // search text
  const [cate, setCate] = useState("all"); // selected category slug
  const [filteredItems, setFilteredItems] = useState(foodItemsData); // currently shown list

  // central filtering function - filters by category + search
  const runFilter = (search = input, category = cate) => {
    const q = (search || "").trim().toLowerCase();

    // start from full dataset
    let list = foodItemsData;

    // apply category filter (skip if all)
    const cat = String(category || "all").toLowerCase();
    if (cat !== "all") {
      list = list.filter(
        (item) => String(item.food_category).toLowerCase() === cat
      );
    }

    // apply search filter (skip if empty)
    if (q) {
      list = list.filter((item) =>
        String(item.food_name).toLowerCase().includes(q)
      );
    }

    setFilteredItems(list);
  };

  // run filter when input or cate changes
  useEffect(() => {
    runFilter(input, cate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, cate]);

  // helper used by UI to change category
  const filterByCategory = (categoryName) => {
    setCate(String(categoryName || "all").toLowerCase());
    // runFilter will be triggered by useEffect
  };

  const value = {
    input,
    setInput,
    cate,
    setCate,
    filteredItems,
    setFilteredItems,
    filterByCategory,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default UserContext;
