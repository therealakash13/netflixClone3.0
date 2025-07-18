import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { decodedResponse } from "../Page/Login/LoginTypes";
import { search } from "../Services/MovieFetch";
import type { Movie } from "../Services/movies.type";

export default function Navbar() {
  const navigate = useNavigate();

  const links = [
    { name: "Movies", path: "/movies", icon: "bx bxs-camera-movie" },
    { name: "TV Shows", path: "/tvshows", icon: "bx bxs-tv" },
    { name: "Now Playing", path: "/nowplaying", icon: "bx bxs-movie-play" },
    { name: "Popular", path: "/popular", icon: "bx bx-trending-up" },
    { name: "Upcoming", path: "/upcoming", icon: "bx bxs-archive-in" },
    { name: "About", path: "/about", icon: "bx bxs-info-circle" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [user, setUser] = useState<Partial<decodedResponse>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onSearchChange = async () => {
    if (searchTerm.length > 1) {
      setIsDropdownVisible(true);

      try {
        const results = await search(searchTerm);
        setSearchResults(results.filter((m): m is Movie => m !== undefined)); // Type-safe filter
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      }
    } else {
      setIsDropdownVisible(false);
      setSearchResults([]); // Clear results if input is too short
    }
  };

  const selectResult = (item: Movie) => {
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
      <nav className="fixed top-0 left-0 w-full z-30 bg-background/90 backdrop-blur font-semibold text-primary shadow-sm text-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex text-lg justify-between items-center pt-3 pb-3">
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
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center justify-center space-x-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="">
                      <div className="flex flex-col items-center justify-center hover:scale-110 hover:text-accent transition duration-500">
                        <i className={link.icon}></i>
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search + Profile */}

            <div className="hidden md:flex items-center space-x-3 relative">
              {/* Search Icon */}
              <div className="xl:hidden ">
                <i className="bx bx-search-alt-2 text-3xl text-text hover:scale-110 hover:text-accent transition duration-500 cursor-pointer"></i>
              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  onSearchChange();
                }}
                onFocus={onSearchChange}
                placeholder="Search..."
                className="px-3 py-1 rounded-xl border-2 border-highlight focus:border-accent shadow-sm focus:outline-none w-60 hidden xl:flex placeholder-text"
              />
              {isDropdownVisible && (
                <ul className="absolute top-full mt-1 w-80 rounded-xl z-10 max-h-96 overflow-y-auto text-text bg-accent transition duration-500 scrollbar-thin scrollbar-thumb-accent scrollbar-track-background">
                  {searchResults.map((item, i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-text hover:text-accent cursor-pointer"
                      onClick={() => selectResult(item)}
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-10 rounded"
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt=""
                        />
                        <span>
                          {item.title || item.original_title || item.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {user.name && (
                <span className="font-bold text-lg cursor-default text-text">
                  {user.name}
                </span>
              )}

              <img
                src={user.picture}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-highlight ring-2 ring-accent"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
              />

              <button
                onClick={signOut}
                className="ml-2 text-text hover:text-accent bg-accent hover:bg-text hover:scale-110 cursor-pointer outline-2 outline-highlight hover:outline-accent transition duration-500 px-3 rounded-xl"
              >
                Sign Out
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="focus:outline-none"
              >
                <i className="bx bx-menu text-2xl hover:text-accent hover:scale-110 transition duration-500 cursor-pointer"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col items-end space-y-2 pb-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center justify-center text-2xl text-text hover:text-accent hover:font-bold transition duration-500 hover:scale-110"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`${link.icon} mr-3`}></i>
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src={user.picture}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-highlight ring-2 ring-accent"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-bold text-xl cursor-default text-text">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={signOut}
                  className="hover:scale-110 text-text hover:text-accent bg-accent hover:bg-text outline-2 outline-highlight hover:outline-accent rounded-xl px-2 mt-1 transition duration-500 cursor-pointer"
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
