import Button from "./Button";

/* eslint-disable react/prop-types */
export default function Product({ images, title, price }) {
    return (
        <div className="shadow-lg rounded-xl p-5 grid grid-rows-[3fr_2fr_1fr] min-h-[100%] hover:scale-101 transition-transform">
            <div className="w-[100%] max-h-[300px] flex justify-center">
                <img className="h-[100%] object-contain" src={images[0]} alt={title} />
            </div>
            <div className="mt-10">
                <div className="flex flex-col gap-y-5">
                    <h2 className="text-3xl">{title}</h2>
                    <div className="flex justify-between items-center text-xl">
                        <h3 className="font-semibold">Price:</h3>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex items-center">
                <Button text={"Add to Cart"} color={"#83B816"} />
            </div>
        </div>
    )
}
