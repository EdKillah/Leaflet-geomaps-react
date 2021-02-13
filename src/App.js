import "./App.css";
import MapView from "./components/MapView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <MapView className="leaflet-container" />;
        </Route>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
