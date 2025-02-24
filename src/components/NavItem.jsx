/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

export default function NavItem({ icon, text, link }) {
    return (
        <NavLink to={link} className={({ isActive }) => (isActive ? "text-tertiary" : "text-white")}>
            <div className="inline-flex gap-x-2 bg-secondary py-2 px-4 rounded-lg shadow-md">
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
                <span>
                    {text}
                </span>
            </div>
        </NavLink>
    )
}
