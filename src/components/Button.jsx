/* eslint-disable react/prop-types */
export default function Button({text, color}) {
    return (
        <button className={"w-[100%] rounded-3xl py-2 font-semibold text-lg cursor-pointer"} style={{backgroundColor: color}}>
            {text}
        </button>
    )
}
