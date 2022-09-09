import Item from "./Item";
import React from 'react';
import { PRODUCTS,RESOURCES,COMPANY,SUPPORT } from "./Menu";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item links={PRODUCTS} title="PRODUCTS" />
      <Item links={RESOURCES} title="RESOURCES" />
      <Item links={COMPANY} title="COMPANY" />
      <Item links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;