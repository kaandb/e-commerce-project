import React from 'react';
import ShopCategories from '../components/ShopCategories';
import ShopProducts from '../components/ShopProducts';
import BrandLogos from '../components/BrandLogos';

const ShopPage = () => {
  return (
    <div className="w-full">
      <ShopCategories />
      <ShopProducts />
      <BrandLogos />
    </div>
  );
};

export default ShopPage;