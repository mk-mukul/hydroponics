import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Footer } from "./containers/Footer";
import { Header } from "./containers/Header";
import { Home } from "./containers/Home";
import { Status } from "./containers/Status";
import { Teams } from "./containers/Teams";

function App() {
  return (
    <div className="App bg-green-50">
    <Router>
      <Header/>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/status"} component={Status} />
        <Route exact path={process.env.PUBLIC_URL + "/teams"} component={Teams} />
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}
export default App;

