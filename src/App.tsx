import { Route, Router, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";

import { createBrowserHistory } from "history";
import Navbar from "./shared/components/navbar";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
