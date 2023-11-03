import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const CartWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>20</span>
        </div>
    )
}

export default CartWidgetComponent;