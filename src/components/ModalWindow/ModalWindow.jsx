import React, { useState } from 'react';

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Agar modal close kar diya jaye to kuch bhi nazar nahi ayega
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
      {/* Modal Container */}
      <div className="relative max-w-lg w-full bg-white rounded-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button (Top Right Cross) */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 z-10 bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-red-700 transition-colors shadow-md"
          aria-label="Close"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Admission Image */}
        <div className="w-full">
          <img 
            src="/path-to-your-image/PGCAdmission.jpg" 
            alt="Punjab Colleges Admission Fall 2025" 
            className="w-full h-auto block"
          />
        </div>

      </div>
    </div>
  );
};

export default ModalWindow;