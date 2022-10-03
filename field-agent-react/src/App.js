import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import Confirmation from "./components/Confirmation";
 import Error from "./components/Error";
 import Home from "./components/Home";
import DeleteAgent from "./components/DeleteAgent";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import AgentForm from "./components/AgentForm";
import AgentList from "./components/AgentList";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route exact path="/">
              <AgentList />
            </Route>
        <Route path={["/edit/:id", "/add"]}>
          <AgentForm />
        </Route>
        <Route path="/delete/:id">
              <DeleteAgent />
            </Route>

        <Route path="/confirmation">
          <Confirmation />
        </Route>

        <Route path="/error">
          <Error />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;