import { Route, Router, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";

import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <>
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
