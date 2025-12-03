// src/pages/Home.jsx
import { useContext } from "react";
import Categories from "../Category";
import Nav from "../components/Nav";
import Card from "../components/Card";
import DataContext from "../context/dataContext";

export default function Home() {
  const {
    filteredItems = [],
    filterByCategory,
    input = "",
  } = useContext(DataContext);

  // hide categories when user has typed (ignore whitespace)
  const showCategories = !(input || "").trim();

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {showCategories ? (
        // Categories Section
        <div className="w-full flex flex-wrap justify-center gap-6 px-6 mt-5">
          {Categories.map((item) => (
            <button
              key={item.id}
              onClick={() => filterByCategory(item.name)}
              type="button"
              className="w-[150px] h-[150px] bg-white flex flex-col justify-center items-center gap-3 rounded-xl shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200"
              aria-pressed="false"
            >
              {item.icon}
              <span className="text-lg font-semibold text-gray-700 capitalize">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      ) : null}

      {/* Food Items Section */}
      <div className="mt-10 w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {filteredItems.length === 0 ? (
          <div className="text-gray-500">No items found.</div>
        ) : (
          filteredItems.map((item) => (
            <Card
              key={item.id ?? item.food_name}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
            />
          ))
        )}
      </div>
    </div>
  );
}
