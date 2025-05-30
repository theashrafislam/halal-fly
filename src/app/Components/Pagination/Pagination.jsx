import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* Prev Button */}
      <button className="flex items-center px-3 py-2 bg-white rounded-md text-[#2D3E50] hover:bg-gray-50 border border-gray-200">
        <IoChevronBack className="mr-1" />
        <span>Prev</span>
      </button>
      
      {/* Page 1 */}
      <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#2D3E50] hover:bg-gray-50 border border-gray-200">
        1
      </button>
      
      {/* Page 2 - Active */}
      <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#A51CBA] text-[#FFFFFF] border border-[#A51CBA]">
        2
      </button>
      
      {/* Page 3 */}
      <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#2D3E50] hover:bg-gray-50 border border-gray-200">
        3
      </button>
      
      {/* Ellipsis */}
      <div className="w-10 h-10 flex items-center justify-center text-[#2D3E50]">
        ...
      </div>
      
      {/* Page 6 */}
      <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#2D3E50] hover:bg-gray-50 border border-gray-200">
        6
      </button>
      
      {/* Next Button */}
      <button className="flex items-center px-3 py-2 bg-white rounded-md text-[#2D3E50] hover:bg-gray-50 border border-gray-200">
        <span>Next</span>
        <IoChevronForward className="ml-1" />
      </button>
    </div>
  );
};

export default Pagination;