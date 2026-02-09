import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useDispatch } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage'; 
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyToken());
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
          <Route path="/shop" exact>
            <ShopPage />
          </Route>
          <Route path="/product/:productId">
            <ProductDetailPage />
          </Route>
          <Route path="/product" exact>
            <ProductDetailPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/team" exact>
            <TeamPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/signup" exact>
            <SignupPage />
          </Route>
          <Route path="/login" exact>
             <LoginPage />
          </Route>

        </Switch>
      </PageContent>
      <Footer />
    </div>
  );
}

export default App;