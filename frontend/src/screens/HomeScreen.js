import './HomeScreen.css';
import {useEffect} from 'react'; //use useeffect to find products
import { useSelector, useDispatch } from 'react-redux'; //hooks

import Product from '../components/Product'; //components
import {getProducts as showProducts} from '../redux/actions/productActions';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector((state)=> state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect (() => {
        dispatch(showProducts());
    }, [dispatch]);

    return ( 
        <div className="homescreen">
            <h2 className="homescreen__title">Available Products </h2>
            <div className="homescreen__products">
                {loading ? ( <h2>Products Loading...</h2> ) : error ? ( <h2>{error}</h2>) : (
                    products.map((product) => <Product
                        key={product._id}
                        productId={product._id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            imageUrl={product.imageUrl}

                    />))}
            </div>
        </div>
    );

};

export default HomeScreen;