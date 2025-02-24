/* eslint-disable react/prop-types */
export default function CartItem({ id, images, title, price, quantity }) {
    return (
        <div className="shadow-lg rounded-xl py-5 px-2 grid grid-cols-[1fr_2fr] bg-white">
            <div className="w-[100%] max-h-[300px] flex justify-center">
                <img className="h-[100%] object-contain" src={images[0]} alt={title} />
            </div>
            <div className="">
                <div className="flex flex-col gap-y-5">
                    <h2 className="text-3xl">{title}</h2>
                    <div className="flex justify-between items-center text-xl max-w-[40%]">
                        <h3 className="font-semibold">Price:</h3>
                        <p>${price}</p>
                    </div>
                    <div className="flex justify-between items-center text-xl max-w-[40%]">
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
