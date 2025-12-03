// src/components/Nav.jsx
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from "react";
import DataContext from "../context/dataContext";

export default function Nav() {
  const { input, setInput } = useContext(DataContext);

  return (
    <div className="w-full h-[100px] flex justify-between items-center md:px-8">
      {/* Icon */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>

      {/* Search bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[45%] h-[60px] bg-white flex items-center gap-5 px-5 rounded-md shadow-md md:w-[70%]"
      >
        <IoSearch className="text-green-500 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search Items..."
          className="bg-transparent outline-none text-[16px] md:text-[20px] placeholder:text-gray-400 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* Cart */}
      <div className="relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <span className="absolute -top-1 -right-1 bg-red-100 text-green-500 font-bold text-[12px] px-1 rounded-full">
          {/* badge count if any */}
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}
