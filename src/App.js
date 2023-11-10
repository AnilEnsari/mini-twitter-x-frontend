import { useParams } from "react-router-dom";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Form from "./components/Form";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/profile/:id" exact>
          <Profile />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/register" exact>
          <Form />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/homepage/:id" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
