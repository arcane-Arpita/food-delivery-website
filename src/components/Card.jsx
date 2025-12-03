// src/components/Card.jsx
import React from "react";
import { LuLeafyGreen } from "react-icons/lu";

function Card({ name, image, price, type }) {
  return (
    <div className="w-[300px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:shadow-xl transition-all">
      {/* Image */}
      <div className="w-full h-[180px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Name */}
      <div className="text-2xl font-semibold capitalize">{name}</div>

      {/* Price + Type */}
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}/-</div>
        <div className="flex items-center gap-2 text-green-500 text-lg font-semibold">
          <LuLeafyGreen />
          <span className="capitalize">{type}</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-400 transition-all">
        Add to dish
      </button>
    </div>
  );
}

export default Card;
