import React from 'react';
import { FiDownload } from 'react-icons/fi'; // Using more subtle Feather icon

export default function ProfessionalDownloadButton() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <a
        href="/cv.pdf"
        download="Shayan_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-200"></div>
        <button className="
          relative
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-white
          font-medium py-4 px-12
          rounded-lg
          border border-gray-200 dark:border-gray-700
          shadow-sm hover:shadow-md
          transition-all duration-300 ease-in-out
          flex items-center gap-3
          hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          text-base
        ">
          <FiDownload className="text-3xl text-blue-500 dark:text-teal-400" />
          <span className='text-2xl'>Download CV</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </button>
      </a>
    </div>
  );
}