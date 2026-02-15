import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import EditorsPick from '../components/EditorsPick';
import BestsellerProducts from '../components/BestsellerProducts';
import ClassicProduct from '../components/ClassicProduct';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts'; 

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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