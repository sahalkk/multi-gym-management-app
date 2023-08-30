function PopupWindow({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0  ${isOpen ? "flex" : "hidden"} bg-black`}
      onClick={onClose}
    >
      <div className="flex flex-col bg-blue-200 rounded justify-around shadow-md m-auto sm:w-3/4 h-3/4 md:w-1/2 md:h-1/2">
        {/* Contents of the pop-up */}
        <div className="flex flex-col items-center text-blue-900">
          <h3 className="mb-3 font-extrabold text-lg">Gym Checkin</h3>
          <h1 className="text-5xl sm:text-5xl">Fat 2 Fit Multi Gym</h1>
          <span className="text-2xl sm:text-2xl">Kannur</span>
        </div>
        <div className="flex flex-col  items-center md:flex-row md:flex md:justify-evenly mt-4">
          <button onClick={onClose} className="w-1/2 md:w-1/4">
            <div className="bg-white text-blue-500 p-2 mb-3 text-center rounded font-bold">
              Cancel
            </div>
          </button>
          <button className="w-1/2 md:w-1/4">
            <div className="bg-blue-500 text-white p-2 text-center rounded font-bold">
              Join
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupWindow;
