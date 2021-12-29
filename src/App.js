import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import './App.css';

import Entra from "./Pages/Entra";
import Congratulations from "./Pages/Congratulations";
import Dashboad from "./Pages/Dashboad";
import Champion from "./Pages/Champion";
import Default from "./Pages/Default";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Entra}/>
        <Route exact path="/Congratulations" component={Congratulations}/>
        <Route exact path="/Dashboad" component={Dashboad}/>
        <Route exact path="/Champion" component={Champion}/>
        <Route exact path="/Default" component={Default}/>

      </Switch>

    </Router>
  
  );
}

export default App;
