import React from "react";

const FlippingCard = () => {
  return (
    <div className="w-64 h-96 relative group">
      <div className="transform transition-transform duration-500 ease-in-out absolute w-full h-full group-hover:rotate-y-180">
        {/* Front of the card */}
        <div className="bg-blue-400 w-full h-full rounded-lg p-4 shadow-lg text-white">
          <h2 className="text-xl font-semibold">Front Side</h2>
          <p>This is the front of the card.</p>
        </div>
      </div>
      <div className="transform transition-transform duration-500 ease-in-out absolute w-full h-full group-hover:rotate-y-0">
        {/* Back of the card */}
        <div className="bg-red-400 w-full h-full rounded-lg p-4 shadow-lg text-white">
          <h2 className="text-xl font-semibold">Back Side</h2>
          <p>This is the back of the card.</p>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
