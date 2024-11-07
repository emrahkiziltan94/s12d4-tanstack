
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';

// 1. tanstacksiz istek at sonucu ekrana loading ile bastır.
// 2. tanstack kur ve tanstack ile at. hız farkını ölç.
function App() {

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/products" exact>
        <ProductList />
      </Route>
      <Route path="/add-product" exact>
        <AddProduct />
      </Route>
    </Switch>
  )
}

export default App;
