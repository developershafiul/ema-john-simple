import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NoMatch from './Components/NoMatch/NoMatch';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
