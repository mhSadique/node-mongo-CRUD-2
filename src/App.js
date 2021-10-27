import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Navigation from './components/Navigation';
import UpdateProduct from './components/UpdateProduct';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Router>

        <Navigation />

        <Switch>
          
          <Route exact path='/'>
            <Products />
          </Route>

          <Route path={'/add-product'}>
            <AddProduct />
          </Route>

          <Route path='/update-product/:id'>
            <UpdateProduct />
          </Route>

          <Route path='/see-products'>
            <Products />
          </Route>
          

        </Switch>

      </Router>
    </div>
  );
}

export default App;
