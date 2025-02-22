/* eslint-disable react/prop-types */
export default function Button({text, color, handleClick, productId}) {
    return (
        <button data-product-id={productId} className={"w-[100%] rounded-3xl py-2 font-semibold text-lg cursor-pointer"} onClick={handleClick} style={{backgroundColor: color}}>
            {text}
        </button>
    )
}
