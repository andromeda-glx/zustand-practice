import useCart from "../stores/cart"
import convertToCurrency from "../utils/convertToCurrency";
import Button from "./Button";

export default function OrderSummary() {
    const cartQuantity = useCart((state) => state.totalQuantity);
    const invoice = useCart((state) => state.invoice);

    return (
        <div className="bg-white p-5 flex justify-center">
            <div className="w-[100%] max-w-[350px] border p-5 flex flex-col gap-2">
                <h2 className="text-2xl font-semibold mb-5">Order Summary</h2>
                <div className="flex justify-between gap-x-2">
                    <h3>Items({cartQuantity || 0}): </h3>
                    <p>{convertToCurrency(invoice.totalPrice)}</p>
                </div>
                <div className="flex justify-between gap-x-2">
                    <h3>Shipping: </h3>
                    <p>{convertToCurrency(invoice.deliveryCost)}</p>
                </div>
                <div className="flex justify-between gap-x-2">
                    <h3>Total Discount: </h3>
                    <p>{convertToCurrency(invoice.totalDiscount)}</p>
                </div>
                <div className="flex justify-between gap-x-2 mt-5 text-red-800 text-xl">
                    <h3 className="font-semibold">Total Price: </h3>
                    <p className="font-bold">{convertToCurrency(invoice.totalPrice || 0)}</p>
                </div>
                <div className="mt-10">
                    <Button text={"Place Your Order"} color={"white"} backgroundColor={"#252A34"} />
                </div>
            </div>
        </div>
    )
}
