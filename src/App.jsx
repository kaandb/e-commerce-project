import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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

        </Switch>
      </PageContent>
      <Footer />
    </div>
  );
}

export default App;