import React from "react";
import banner from "../../assets/rightBanner.png";

const RightSidebar = () => {
  return (
    <div
      className="h-full w-full rounded-xl text-white p-8 relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="right-linearGrad absolute top-0 w-full h-full left-0 rounded-xl" />
    </div>
  );
};

export default RightSidebar;
