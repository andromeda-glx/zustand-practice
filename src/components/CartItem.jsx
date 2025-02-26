import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../stores/cart"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable react/prop-types */
export default function CartItem({ id, images, title, price, quantity, handleAdd, handleDecrease }) {
    const remove = useCart((state) => state.actions.removeFromCart);

    return (
        <div className="border border-gray-400 py-5 px-2 grid grid-cols-[1fr_2fr] bg-white gap-x-5">
            <div className="max-w-[200px] max-h-[200px] w-[100%] h-[100%] flex justify-center">
                <img className="h-[100%] object-contain" src={images[0]} alt={title} />
            </div>
            <div className="">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl">{title}</h2>
                    <div className="flex gap-2 text-lg">
                        <h3 className="font-semibold text-red-800">Price:</h3>
                        <p className="font-bold text-red-800">${price}</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <h3 className="font-semibold">Quantity:</h3>
                        <p>{quantity}</p>
                    </div>
                    <div className="">
                        <h3>Edit quantity</h3>
                        <div className="inline-flex gap-x-5 border border-gray-300 items-center">
                            <span
                                className="cursor-pointer bg-gray-300 w-7 h-7 flex justify-center items-center p-3"
                                onClick={handleDecrease}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </span>
                            <span>
                                {quantity}
                            </span>
                            <span
                                className="cursor-pointer bg-gray-300 w-7 h-7 flex justify-center items-center p-3"
                                onClick={handleAdd}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => remove(id, true)} className="bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer mt-2" >
                            Remove from Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
