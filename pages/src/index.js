import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import News from "views/News.js";
import Events from "views/Events.js";
import Events2 from "views/Events2.js";
import Events3 from "views/Events3.js";
import Events4 from "views/Events4.js";
import Index from "views/Index.js";

import Interpreters from "views/Interpreters.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
    
 
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/news" exact component={News} />
      <Route path="/events" exact component={Events} />
      <Route path="/events2" exact component={Events2} />
      <Route path="/events3" exact component={Events3} />
      <Route path="/events4" exact component={Events4} />
      <Route path="/interpreters" exact component={Interpreters} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
