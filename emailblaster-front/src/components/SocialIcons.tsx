import React from "react";
interface SocialIconsProps{
    icons:any;
}

const SocialIcons = ({ icons }:SocialIconsProps) => {
  return (
    <div className="text-teal-500">
      {icons.map((icon:any) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          {/* <ion-icon name={icon.name}></ion-icon> */}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;