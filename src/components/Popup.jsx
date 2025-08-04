import { useCart } from "../providers/CartProvider";

const Popup = () => {
  const { showPopup, popupMessage, popupType } = useCart();

  if (!showPopup) return null;

  const bgColor = popupType === "success" ? "bg-green-500" : "bg-red-500";
  const icon = popupType === "success" ? "✓" : "✕";

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 min-w-80`}>
        <div className="text-xl font-bold">{icon}</div>
        <div className="flex-1">
          <p className="font-semibold">
            {popupType === "success" ? "Success!" : "Error!"}
          </p>
          <p className="text-sm opacity-90">{popupMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup; 