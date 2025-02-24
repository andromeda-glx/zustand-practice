import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import Spinner from "../components/Spinner";
import { useFetchData } from "../hooks/useFetchData"
import useCart from "../stores/cart";

export default function Cart() {
    const mainURL = 'https://dummyjson.com/products';

    const items = useCart((state) => state.items);
    const urls = [];

    items.forEach(item => {
        urls.push(`${mainURL}/${item.id}`);
    });

    const { data, isLoading, error } = useFetchData(urls);
    const products = data && data.map(item => item.data);
    console.log(products);


    return (
        <div className="grid grid-rows-[auto_1fr] lg:grid lg:grid-cols-[1fr_500px] gap-5">
            <div className="bg-white p-5 max-h-dvh overflow-auto">
                {!error ? isLoading ? <Spinner /> : products &&
                    <ul className="grid grid-cols-1 gap-5">
                        {products && products.length ? products?.map(({ id, title, images, price }) => {
                            return <li key={id}>
                                <CartItem id={id} title={title} images={images} price={price} quantity={items.find(item => item.id === id).quantity} />
                            </li>
                        }) : <p className="text-center">The cart is empty</p>}
                    </ul>
                    :
                    <h2>Network Error. {error.message}</h2>
                }
            </div>
            <div className="-order-1 lg:order-1">
                <OrderSummary />
            </div>
        </div>
    )
}
