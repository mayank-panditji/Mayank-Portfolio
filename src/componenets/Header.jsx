import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleHireClick = () => {
    navigate('/hire'); 
  }
  const isOnHirePage = location.pathname === '/hire';

  return (
    <div className="absolute w-full z-10 px-4 py-20 flex justify-end">
      {!isOnHirePage && (
        <button
          onClick={handleHireClick}
          className="bg-black rounded-full border-4 text-xl px-6 py-2 hover:bg-gray-500"
        >
          Hire me
        </button>
      )}
      {/* {!isOnHirePage && (
        <i className="ri-more-2-fill text-4xl ml-3 py-2"></i>
      )} */}
    </div>
  );
};

export default Header;
