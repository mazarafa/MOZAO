import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import './App.css';


import App from "./App";
import Dashboad from "./Pages/Dashboad";
import Congratulations from "./Pages/Congratulations";
import Default from "./Pages/Default";

function Routes() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/Dashboad" component={Dashboad}/>
        <Route exact path="/Congratulations" component={Congratulations}/>
        <Route exact path="/Default" component={Default}/>
      </Switch>

    </Router>

  );
  
}

export default Routes;