import "./App.css";
import { Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Error from "./pages/Error";
// components
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:id" component={Room} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
