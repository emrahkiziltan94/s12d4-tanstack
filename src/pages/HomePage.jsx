import { useHistory } from "react-router-dom";

export default function HomePage() {
    const history = useHistory();
    return (
        <>
            <h1>HomePage</h1>
            <button onClick={() => history.push('/products')}>Products</button>
            <button onClick={() => history.push('/add-product')}>Add Product</button>
        </>


    );
}