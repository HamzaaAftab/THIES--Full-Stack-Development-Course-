
const Navbar = () => {
  return (
    <nav className="  px-12 py-6 sm:px-18 flex justify-between items-center">
      {/* Logo Section */}
      <div className=" tracking-[12px] text-2xl font-bold">
        DEPOT
      </div>
      
      {/* Purchase Button */}
      <div>
        <button className="bg-black text-white px-8 py-3 sm:px-10 rounded-md hover:scale-110 sm:py-4 font-bold text-sm hover:bg-gray-600 transition-all duration-300 sm:tracking-[3px] ">
          PURCHASE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
