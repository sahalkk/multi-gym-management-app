import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PopupWindow from "./PopupWindow";

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();
  const [currentPage, setcurrentPage] = useState();
  const itemsPerPage = 10;
  const [isPopupOpen, setIsPopupOpen] = useState();

  // the total number of items
  const allItems = [
    {
      name: "ABC GYM, NYC",
      date: "28/08/23",
      time: "18:28",
      duration: "1 hr",
      status: "Active",
    },
    {
      name: "ABC GYM, NYC",
      date: "28/08/23",
      time: "18:28",
      duration: "1 hr",
      status: "Active",
    },
    {
      name: "ABC GYM, NYC",
      date: "28/08/23",
      time: "18:28",
      duration: "1 hr",
      status: "Active",
    },
  ];

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

  return (
    isAuthenticated && (
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

            <img
              src={user.picture}
              alt={user.name}
              className="h-10 rounded-full"
            />
            <span className="text-white">{user.name}</span>
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
                  <td className="text-center p-2">ABC GYM, NYC</td>
                  <td className="text-center p-2">2023-08-26</td>
                  <td className="text-center p-2">10:00 AM</td>
                  <td className="text-center p-2">1 hour</td>
                  <td className="text-center p-2">Active</td>
                </tr>
              ))}

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

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
        <p className="text-center mt-2">
          {startIndex + 1} to {Math.min(endIndex, allItems.length)} of{" "}
          {allItems.length}
        </p>
      </div>
    )
  );
}

export default Dashboard;
