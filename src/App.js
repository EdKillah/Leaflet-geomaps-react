import "./App.css";
import MapView from "./components/MapView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/Menu';
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
//import "leaflet/dist/leaflet.js";
//import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";
import MapComp from './components/MapComp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <MapView className="leaflet-container" />;
        </Route>
        <Route exact path="/">          
          <Menu />
        </Route>
        <Route exact path="/mapro">
          <MapComp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
