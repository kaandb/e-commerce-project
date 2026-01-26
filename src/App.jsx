import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </PageContent>
      <Footer />
    </div>
  );
}

export default App;
