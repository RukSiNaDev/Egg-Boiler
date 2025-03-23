const Popup = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    );
  };
  
  export default Popup;