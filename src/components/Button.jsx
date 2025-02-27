/* eslint-disable react/prop-types */
export default function Button({ text, color, backgroundColor, handleClick }) {
    return (
        <button
            className={"w-[100%] rounded-3xl py-2 font-semibold text-lg cursor-pointer hover:scale-101 active:scale-102"}
            style={{ backgroundColor: backgroundColor, color: color }}
            onClick={() => handleClick()}
        >
                {text}
        </button>
    )
}
