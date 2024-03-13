import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1>Cart</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Desc.</span>
                </div>
                <div className='header-block'>
                    <span>Qty.</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span></span>
                </div>
            </div>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        );
                    })
                }
                <span className='total'>Total: ₹{cartTotal}</span>
        </div>
    );
}

export default Checkout;