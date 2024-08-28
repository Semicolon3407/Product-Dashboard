import React from 'react';
import "./Loading.css"

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center z-50">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;