function PopupWindow({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 ${isOpen ? "flex" : "hidden"}`}
      onClick={onClose}
    >
      <div className="bg-white rounded p-4 shadow-md m-auto">
        {/* Contents of the pop-up */}
        {/* ... */}
        <button onClick={onClose} className="block mx-auto mt-4">
          Close
        </button>
      </div>
    </div>
  );
}

export default PopupWindow;
