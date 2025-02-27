import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../stores/cart"
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
                        <h3 className="font-semibold text-lg mb-2">Edit quantity:</h3>
                        <div className="inline-flex gap-x-5 border-primary border-2 items-center rounded-2xl">
                            <span
                                className="cursor-pointer w-7 h-7 flex justify-center items-center p-3 rounded-l-xl hover:bg-gray-300 transition-colors"
                                onClick={handleDecrease}
                            >
                                {quantity > 1
                                    ? <FontAwesomeIcon icon={faMinus} />
                                    : <FontAwesomeIcon icon={faTrashCan} />
                                }
                            </span>
                            <span className="font-semibold">
                                {quantity}
                            </span>
                            <span
                                className="cursor-pointer w-7 h-7 flex justify-center items-center p-3 rounded-r-xl hover:bg-gray-300 transition-colors"
                                onClick={handleAdd}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => remove(id, true)} className="bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer mt-2 flex items-center gap-x-2" >
                            <FontAwesomeIcon icon={faTrashCan} />
                            Remove from Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
