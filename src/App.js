import React, { useEffect, useState } from "react";
import Home from "./Home";
import Loader from "./Load";
import {BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import './App.css';
//import Search from './pages/Search';
import SearchPage from "./SearchPage";
//import SearchPageTest from './SearchPageTest';
import Search from './Search';

function App() {

  const [appLoaded, setAppLoaded] = useState(false);
	const [startLoadProgress, setStartLoadProgress] = useState(false);
	useEffect(() => {stopLoad();}, []);
	const stopLoad = () => {
		setStartLoadProgress(true);
		setTimeout(() => setAppLoaded(true), 3000);
	};
	if (!appLoaded) return <Loader done={startLoadProgress} />;
  return (
    <div className="app">
     
      <Router>
        <Switch>
          <Route path="/search">
           <Search />
           <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    
    
   
     
    </div>
  );
}

export default App;
