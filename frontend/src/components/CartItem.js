import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = ()=> {
    return (
    <div className="cartitem" >
        <div className="cartitem__image">
            <img src="https://images.unsplash.com/photo-1610136649349-0f646f318053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80" alt="product name"/>
        </div>

        <Link to={`/product/${111}`} className="cartItem__name">
            <p>Product 01</p>
        </Link>

        <p className="cartitem__price"> Rs.49,900.99</p>
        <select className="cartitem__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button className="cartItem__delBtn">
            <i className="fas fa-trash"></i>
        </button>
            
    </div>
    );

};

export default CartItem;