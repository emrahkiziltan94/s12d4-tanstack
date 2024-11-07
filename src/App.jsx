import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// 1. tanstacksiz istek at sonucu ekrana loading ile bastır.
// 2. tanstack kur ve tanstack ile at. hız farkını ölç.
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http:localhost:8080/products')
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {product.id}-{product.name}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
