import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useDispatch } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/productActions'; 
import { setCart } from './store/actions/shoppingCartActions';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CreateOrderPage from './pages/CreateOrderPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage'; 
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories());
    const handleStorageChange = (event) => {
      if (event.key === "shoppingCart") {
        try {
          const newCart = JSON.parse(event.newValue);
          dispatch(setCart(newCart));
        } catch (error) {
          console.error(error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };

  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Header />
      <PageContent>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          
          <Route path="/shop/:gender/:categoryName/:categoryId" exact>
            <ShopPage />
          </Route>
          <Route path="/shop" exact>
            <ShopPage />
          </Route>
          
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" exact>
            <ProductDetailPage />
          </Route>
          <Route path="/product/:productId" exact>
            <ProductDetailPage />
          </Route>

          <Route path="/cart" exact>
             <ShoppingCartPage />
          </Route>

          <Route path="/order" exact>
             <CreateOrderPage />
          </Route>

          <Route path="/previous-orders" exact>
             <PreviousOrdersPage />
          </Route>
          
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/team" exact component={TeamPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage} />

        </Switch>
      </PageContent>
      <Footer />
    </div>
  );
}

export default App;