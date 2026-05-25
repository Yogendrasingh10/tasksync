import { FaSearch } from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="bg-blue-600 p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          TaskSync
        </h1>

        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />

          <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded w-72 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;