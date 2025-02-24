import useCart from "../stores/cart";

/* eslint-disable react/prop-types */
export default function Button({ text, color, backgroundColor, handleClick }) {

    return (
        <button
            className={"w-[100%] rounded-3xl py-2 font-semibold text-lg cursor-pointer"}
            style={{ backgroundColor: backgroundColor, color: color }}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
