import mealItemCss from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItem = (props) => {
    const price = `$${props.mealsList.price.toFixed(2)}`
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.mealsList.id,
            name: props.mealsList.name,
            amount: amount,
            price: props.mealsList.price,
        });
    };
    
    return (
        <li className={mealItemCss.meal}>
            <div>
                <h3>{props.mealsList.name}</h3>
                <div className={mealItemCss.description}>{props.mealsList.description}</div>
                <div className={mealItemCss.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.mealsList.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;