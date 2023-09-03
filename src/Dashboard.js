import React, { useEffect, useState } from "react";
import PopupWindow from "./PopupWindow";
import sampleDataSet from "./sampleDataSet";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
function Dashboard() {
  const navigate = useNavigate();
  const [currentPage, setcurrentPage] = useState(1);
  const [localUser, setLocalUser] = useState(null);
  const itemsPerPage = 10;
  const [isPopupOpen, setIsPopupOpen] = useState();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLocalUser(JSON.parse(localStorage.getItem("user")));
    } else {
      navigate("/");
    }
  }, [localUser]);

  // the total number of items
  const allItems = sampleDataSet;

  // Calculate index range of current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for current page
  const itemsOnPage = allItems.slice(startIndex, endIndex);

  // Calculate total no of page
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const handlePopupWindowToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleProfileMenuToggle = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    localStorage.getItem("user") && (
      <div>
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 bg-blue-500">
          <div className="text-white">
            <img src={require("./logo.png")} alt="logo" className="h-8" />
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={handlePopupWindowToggle}>
              <img
                src={require("./qrcode.png")}
                alt="qrcode"
                className="h-10"
              ></img>
            </button>

            {/* popup window component */}
            <PopupWindow
              isOpen={isPopupOpen}
              onClose={handlePopupWindowToggle}
            />
            <button
              className="flex items-center"
              onClick={handleProfileMenuToggle}
            >
              <img
                src={localUser?.picture}
                alt={localUser?.name}
                className="h-10 rounded-full mx-1"
              />
              <span className="text-white">{localUser?.name}</span>
            </button>
            <ProfileMenu
              isOpen={isProfileMenuOpen}
              onClose={handleProfileMenuToggle}
            />
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Our App</h1>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Date</th>
                <th className="p-2">Time</th>
                <th className="p-2">Duration</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through your data and render table rows */}
              {itemsOnPage.map((item, index) => (
                <tr key={index}>
                  <td className="text-center p-2">{item.name}</td>
                  <td className="text-center p-2">{item.date}</td>
                  <td className="text-center p-2">{item.time}</td>
                  <td className="text-center p-2">{item.duration}</td>
                  <td className="text-center p-2">{item.status}</td>
                </tr>
              ))}

              {/* Add more rows as needed */}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-2 py-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <p className="text-center mt-2">
          {startIndex + 1} to {Math.min(endIndex, allItems.length)} of{" "}
          {allItems.length}
        </p>
      </div>
    )
  );
}

export default Dashboard;
