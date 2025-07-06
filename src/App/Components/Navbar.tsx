import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { decodedResponse } from "../Page/Login/LoginTypes";

interface SearchItem {
  name?: string;
  title?: string;
  poster_path: string;
}

export default function Navbar() {
  const navigate = useNavigate();

  const links = [
    { name: "Movies", path: "/movies" },
    { name: "Tv Shows", path: "/tvshows" },
    { name: "Now Playing", path: "/nowplaying" },
    { name: "Popular", path: "/popular" },
    { name: "Upcoming", path: "/upcoming" },
    { name: "About", path: "/about" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [user, setUser] = useState<Partial<decodedResponse>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onSearchChange = () => {
    // Simulate search logic
    if (searchTerm.length > 1) {
      setIsDropdownVisible(true);
      // Simulate dummy results
      setSearchResults([
        { title: "Example Movie", poster_path: "/example.jpg" },
        { name: "TV Show", poster_path: "/tvshow.jpg" },
      ]);
    } else {
      setIsDropdownVisible(false);
    }
  };

  const selectResult = (item: SearchItem) => {
    console.log("Selected:", item);
    setIsDropdownVisible(false);
    setSearchTerm("");
    // Optionally navigate to details page
  };

  const signOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData) as Partial<decodedResponse>;
        setUser(parsedUser);
      } catch (err) {
        console.error("Failed to parse session user data", err);
      }
    }
  }, []);

  return (
    <>
      {/* <nav className="font-semibold bg-[#36454F] rounded-b-lg text-white">
        <div className="flex flex-row">
          <div className="flex justify-center">
            <img
              width="110"
              className="mt-3 mb-3 mr-3 m-5 cursor-pointer"
              src="/logo.png"
              alt="Niggaflix"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex flex-row justify-between items-center ml-1 mr-1 w-full">
            <div className="sm:ml-2 lg:ml-5">
              <ul className="ml-3 flex flex-row sm:space-x-4 lg:space-x-12">
                {[
                  { name: "Movies", path: "/movies" },
                  { name: "Tv Shows", path: "/tvshows" },
                  { name: "Now Playing", path: "/nowplaying" },
                  { name: "Popular", path: "/popular" },
                  { name: "Upcoming Movies", path: "/upcoming" },
                  { name: "About", path: "/about" },
                ].map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer hover:scale-110 hover:text-black"
                  >
                    <Link
                      to={link.path}
                      className="hover:font-bold hover:text-black"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <div className="relative flex justify-center p-4 text-black">
                <input
                  type="text"
                  value={searchTerm}
                  placeholder="Search..."
                  className="w-full max-w-lg px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onSearchChange();
                  }}
                  onFocus={onSearchChange}
                />
                {isDropdownVisible && (
                  <ul className="absolute top-full mt-1 w-full max-w-lg bg-gray-700 border rounded-xl z-10 max-h-96 overflow-y-auto">
                    {searchResults.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => selectResult(item)}
                      >
                        <div className="flex flex-row items-center space-x-2">
                          <img
                            className="w-14"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt=""
                          />
                          <span>{item.name || item.title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <span className="inline-block px-4 py-2 text-lg font-bold">
                {user.name}
              </span>

              <img
                width="42"
                className="rounded-full mt-1 mb-1"
                src={user.picture}
                alt="User avatar"
                referrerPolicy="no-referrer"
              />
            </div>
            &nbsp; |
            <button
              onClick={signOut}
              className="lg:px-4 sm:px-2 hover:text-[#E50914]"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav> */}

      <nav className="bg-[#36454F] text-white font-semibold rounded-b-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/home">
              <img
                src="/logo.png"
                alt="Logo"
                width="110"
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:scale-110 hover:text-[#db1a27] transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search + Profile */}
            <div className="hidden md:flex items-center space-x-4 text-white relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  onSearchChange();
                }}
                onFocus={onSearchChange}
                placeholder="Search..."
                className="px-3 py-1 rounded-xl border shadow-sm focus:outline-none focus:ring w-60"
              />
              {isDropdownVisible && (
                <ul className="absolute top-full mt-1 bg-gray-700 text-white w-80 rounded-xl z-10 max-h-96 overflow-y-auto">
                  {searchResults.map((item, i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectResult(item)}
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-10"
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt=""
                        />
                        <span>{item.name || item.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {user.name && (
                <span className="font-bold text-lg text-white">
                  {user.name}
                </span>
              )}

              <img
                src={user.picture}
                alt="User"
                className="w-10 h-10 rounded-full"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
              />

              <button
                onClick={signOut}
                className="ml-2 text-red-400 hover:text-red-600"
              >
                Sign Out
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col items-start space-y-2 pb-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-white hover:text-black hover:font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 mt-4">
                <img
                  src={user.picture}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span className="text-white font-bold">{user.name}</span>
                <button
                  onClick={signOut}
                  className="text-red-400 hover:text-red-600"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
