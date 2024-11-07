import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function ProductList() {


    const [products, setProducts] = useState([]);
    const history = useHistory();

    // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
    const { data, isLoading, error } = useQuery({

        queryKey: ['products'],
        queryFn: () => {
            return axios.get('http://localhost:8080/products')
        }
    });

    useEffect(() => {
        if (data) {
            setProducts(data.data);
        }
    }, [data]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <button onClick={() => history.push("/")}> Home</button>
            <ul>
                {products.length > 0 &&
                    products.map((product) => (
                        <li key={product.id}>
                            {product.id}-{product.name}
                        </li>
                    ))}
            </ul>
        </>
    );
}