import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../stores/cart";
import { useNavigate } from "react-router";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const cartQuantity = useCart((state) => state.totalQuantity);
    const navigate = useNavigate();

    return (
        <header className="bg-primary text-white sticky top-0 z-10">
            <div className="flex justify-between items-center py-5 px-10 text-xl max-w-[1500px] mx-auto">
                <div
                    className="flex items-center gap-x-2 text-3xl text-secondary font-semibold cursor-pointer"
                    onClick={() => navigate("")}
                >
                    <span>onlineHippo</span>
                    <FontAwesomeIcon icon={faHippo} />
                </div>
                <div
                    className="relative cursor-pointer"
                    onClick={() => navigate('cart')}
                >
                    <div className="text-secondary">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>

                    <span className="bg-tertiary p-2 rounded-full w-[20px] h-[20px] flex justify-center items-center text-[13px] absolute -top-2 -right-2">
                        {cartQuantity}
                    </span>
                </div>
            </div>
        </header>
    )
}
