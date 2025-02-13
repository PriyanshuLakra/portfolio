// ButtonComponent.js
import React from 'react';

const ButtonComponent = () => {
  const handleButtonClick = () => {
    // Open the resume in a new tab
    window.open('/resume.pdf', '_blank');
    // If the resume is hosted online, use the URL directly, e.g.:
    // window.open('https://yourwebsite.com/resume.pdf', '_blank');
  };

  return (
    <button
      onClick={handleButtonClick}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      Resume
    </button>
  );
};

export default ButtonComponent;
