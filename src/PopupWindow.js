function PopupWindow({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 ${isOpen ? "flex" : "hidden"}`}
      onClick={onClose}
    >
      <div className="flex flex-col bg-blue-200 rounded p-4  justify-around shadow-md m-auto w-1/2 h-1/2">
        {/* Contents of the pop-up */}
        <div className="flex flex-col items-center text-blue-900">
          <h3 className="mb-3 font-extrabold text-lg">Gym Checkin</h3>
          <h1 className="text-5xl">Fat 2 Fit Multi Gym</h1>
          <span className="text-2xl">Kannur</span>
        </div>
        <div className="flex justify-evenly">
          <button onClick={onClose} className="w-1/4">
            <div className="bg-white text-blue-500 p-2 text-center rounded font-bold">
              Cancel
            </div>
          </button>
          <button className="w-1/4">
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
