import CartItem from "../components/CartItem";
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
        <div className="">
            {!error ? isLoading ? <Spinner /> : products &&
                <ul className="grid grid-cols-1 gap-5">
                    {products && products?.map(({ id, title, images, price }) => {
                        return <li key={id}>
                            <CartItem id={id} title={title} images={images} price={price} quantity={items.find(item => item.id === id).quantity} />
                        </li>
                    })}
                </ul>
                :
                <h2>Network Error. {error.message}</h2>
            }
        </div>
    )
}
