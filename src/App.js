import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/Header.js";
import Footer from "components/footers/Footer.js";
import Cards from "components/Tabs/Cards";
import ContentRender from "components/learn-content/ContentRender";
import LogSup from "components/login-suport/LogSup";
import Panel from "components/panel/Panel";

function App() {
  return (
    <>
      <AnimationRevealPage>
        <Header/>
          <Router>
            <Switch>
              <Route path="/"><Cards/>
              <Route path="/components/:type/:name"><ContentRender/></Route>
              </Route>    
              <Route path="/Login/"></Route>
     
            </Switch>
          </Router>
          <Panel/>
     <LogSup/>
        <Footer/>
      </AnimationRevealPage>
    </>
  ); 
}
export default App;
