import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../stores/cart";
import { useNavigate } from "react-router";

export default function Header() {
    const itemsQuantity = useCart((state) => state.quantity);
    const navigate = useNavigate();

    return (
        <header className="bg-primary text-white flex justify-between items-center py-5 px-10 text-xl">
            <div className="">
                OnlineShop
            </div>
            <div className="relative" onClick={() => navigate('cart')}>
                <div className="">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>

                <span className="bg-tertiary p-2 rounded-full w-[20px] h-[20px] flex justify-center items-center text-[13px] absolute -top-2 -right-2">
                    {itemsQuantity}
                </span>
            </div>
        </header>
    )
}
