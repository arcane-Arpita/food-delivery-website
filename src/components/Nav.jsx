import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

export default function Nav() {
    return (
        <div className="w-full h-[100px] flex justify-between items-center px-8">

            {/* Top icon box */}
            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center">
                <MdFastfood />
            </div>

            {/* Search bar */}
            <form
                action=""
                className="w-[240px] bg-white flex items-center gap-2 px-3 py-2 shadow-sm"
            >
                <IoSearch className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search Items..."
                    className="bg-transparent outline-none text-sm placeholder:text-gray-400 w-full"
                />
            </form>

            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center">
                <LuShoppingBag />
            </div>
        </div>
    );
}
