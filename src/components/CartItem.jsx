import useCart from "../stores/cart"

/* eslint-disable react/prop-types */
export default function CartItem({ id, images, title, price, quantity }) {
    const remove = useCart((state) => state.actions.removeFromCart);

    return (
        <div className="border border-gray-400 py-5 px-2 grid grid-cols-[1fr_2fr] bg-white gap-x-5">
            <div className="max-w-[200px] max-h-[200px] w-[100%] h-[100%] flex justify-center">
                <img className="h-[100%] object-contain" src={images[0]} alt={title} />
            </div>
            <div className="">
                <div className="flex flex-col gap-y-1">
                    <h2 className="text-xl">{title}</h2>
                    <div className="flex gap-2 text-lg">
                        <h3 className="font-semibold text-red-800">Price:</h3>
                        <p className="font-bold text-red-800">${price}</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <h3 className="font-semibold">Quantity:</h3>
                        <p>{quantity}</p>
                    </div>
                    <div>
                        <button onClick={() => remove(id)} className="bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer" >
                            Remove from Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex items-center">
            </div>
        </div>
    )
}
