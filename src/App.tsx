import { Route, Router, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";

import { createBrowserHistory } from "history";
import Navbar from "./shared/components/navbar";
import Profile from "./screens/Profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRepos from "./screens/AllRepos/AllRepos";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/profile/:id/repos">
            <AllRepos />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
