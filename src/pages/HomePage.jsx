import React from 'react';
import EditorsPick from '../components/EditorsPick';
import BestsellerProducts from '../components/BestsellerProducts';
import ClassicProduct from '../components/ClassicProduct';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts'; 

const HomePage = () => {
  return (
    <div>
      <EditorsPick />
      <BestsellerProducts />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;