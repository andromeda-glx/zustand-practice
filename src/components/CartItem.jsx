/* eslint-disable react/prop-types */
export default function CartItem({ id, images, title, price, quantity }) {
    return (
        <div className="border border-gray-400 py-5 px-2 grid grid-cols-[1fr_2fr] bg-white">
            <div className="max-w-[200px] max-h-[200px] w-[100%] h-[100%] flex justify-center">
                <img className="h-[100%] object-contain" src={images[0]} alt={title} />
            </div>
            <div className="">
                <div className="flex flex-col gap-y-1">
                    <h2 className="text-2xl">{title}</h2>
                    <div className="flex gap-2 text-lg">
                        <h3 className="font-semibold text-red-800">Price:</h3>
                        <p className="font-bold text-red-800">${price}</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <h3 className="font-semibold">Quantity:</h3>
                        <p>{quantity}</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex items-center">
            </div>
        </div>
    )
}
