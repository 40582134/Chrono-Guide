import { useState, useEffect } from "react";
import "./App.css";
import * as icons from "./assets/icons/icons.js";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 767);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header
        className={`flex justify-between items-center px-4 py-2 ${
          isSidebarOpen ? "sidebar-open" : ""
        }`}
        id="header"
      >
        <div className="flex">
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="hamburger-icon"
            >
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center flex-grow">
          <h1 id="site-title">Chrono Guide</h1>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white border border-gray-700 rounded py-1 px-2 mr-4"
            id="search-input"
          />
          <button className="py-1 px-4 rounde btn" id="search-input-btn">
            Search
          </button>
        </div>
      </header>

      {/* Horizontal Separator */}
      <hr className="horizontal-divider"></hr>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav
          className={`w-64 flex-shrink-0 overflow-y-auto ${
            isSidebarOpen ? "open" : ""
          }`}
          id="sidebar"
        >
          <ul className={`py-4 ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <li>
              <a href="#" className="py-2 px-4 flex items-center" id="nav-home">
                <div className="flex items-center">
                  <img
                    src={icons.homeIcon}
                    alt="Home"
                    className="w-4 h-4 mr-2 sidebar-svgs"
                  />
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li className="separator">
              <hr className="plain-horizontal-divider" />
              <span className="">Game Content</span>
              <hr className="border-gray-700 mx-4 mt-2" />
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-4 flex items-center"
                id="subnav-news"
              >
                <div className="flex items-center">
                  <img
                    src={icons.newsIcon}
                    alt="News"
                    className="w-4 h-4 mr-2 sidebar-svgs"
                  />
                  News
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-4 hover:bg-gray-800 flex items-center"
                id="subnav-guides"
              >
                <div className="flex items-center">
                  <img
                    src={icons.guideIcon}
                    alt="Guides"
                    className="w-4 h-4 mr-2 sidebar-svgs"
                  />
                  Guides
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-2 px-4 hover:bg-gray-800 flex items-center"
                id="subnav-encyclopedia"
              >
                <div className="flex items-center">
                  <img
                    src={icons.encyclopediaIcon}
                    alt="Encyclopedia"
                    className="w-4 h-4 mr-2 sidebar-svgs"
                  />
                  Encyclopedia
                </div>
              </a>
            </li>
          </ul>
          <ul className="py-4">
            <li className="separator">
              <hr className="border-gray-700 mx-4 mb-2" />
              <span className="px-4 text-gray-500">Extra Resources</span>
              <hr className="border-gray-700 mx-4 mt-2" />
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-4 hover:bg-gray-800 flex items-center"
                id="nav-steam"
              >
                <div className="flex items-center">
                  <img
                    src={icons.steamIcon}
                    alt="Steam Page"
                    className="w-4 h-4 mr-2 sidebar-svgs"
                  />
                  Steam Page
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-4 hover:bg-gray-800 flex items-center"
                id="nav-discord"
              >
                <div className="flex items-center">
                  <img
                    src={icons.discordIcon}
                    alt="Fan Discord"
                    className="w-4 h-4 mr-2 sidebar-svgs"
                  />
                  Fan Discord
                </div>
              </a>
            </li>
          </ul>

          {/* Vertical Separator */}
          <hr className="vertical-divider"></hr>
        </nav>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto" id="main-content-wrapper">
          <main
            className={` ${isSidebarOpen ? "sidebar-open" : ""}`}
            id="main-content"
          >
            <h2 className="text-2xl font-bold mb-4" id="main-heading">
              What Chrono Guide Is For
            </h2>
            <p className="mb-4" id="description-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur enim ullam natus accusantium ut expedita molestias
              earum impedit in dicta et nobis neque odio voluptates adipisci
              aliquid reprehenderit dolorem maxime esse ex corporis est ad
              officia temporibus quis vero. Iusto alias sit reprehenderit ut
              consectetur.
            </p>

            <h2 className="text-2xl font-bold mb-4" id="main-heading-2">
              How To Use Chrono Guide
            </h2>
            <p className="mb-4" id="description-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              assumenda atque eos ad suscipit voluptas voluptatum ut nesciunt
              est maxime dolorem in dicta accusamus enim vero. Ipsam natus earum
              impedit quaerat rerum eius at reprehenderit ut consectetur unde
              quos neque eligendi fugit aliquam accusantium repellat vero.
              Aliquid minus at officia et corporis autem.
            </p>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center" id="footer">
        &copy; 2024 Chrono Guide
        <span className="mx-4">|</span>
        <a href="#" className="text-blue-400 hover:underline" id="contact-link">
          Contact
        </a>
        <span className="mx-4">|</span>
        <a href="#" className="text-blue-400 hover:underline" id="privacy-link">
          Privacy Policy
        </a>
        <span className="mx-4">|</span>
        <a href="#" className="text-blue-400 hover:underline" id="tos-link">
          Terms of Service
        </a>
      </footer>
    </div>
  );
};

export default App;
