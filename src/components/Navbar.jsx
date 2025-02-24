import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

export default function Navbar() {
    return (
        <nav className="mb-10">
            <ul className="flex gap-x-5">
                <li>
                    <NavItem link={"/"} icon={faHome} text={"Home"} />
                </li>
                <li>
                    <NavItem link={"cart"} icon={faShoppingCart} text={"Cart"} />
                </li>
            </ul>
        </nav>
    )
}
