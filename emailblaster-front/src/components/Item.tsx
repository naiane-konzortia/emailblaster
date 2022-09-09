import React from "react";
interface ItemProps{
    links:any;
    title:any;
}
const Item = ({ links, title }:ItemProps ) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {links.map((link:any) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;