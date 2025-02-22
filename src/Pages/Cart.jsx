import { useFetchData } from "../hooks/useFetchData"
import useCart from "../stores/cart";

export default function Cart() {
    const url = 'https://dummyjson.com/products';
    const { items } = useCart((state) => state.items);
    const products = [];

    const { data, isLoading, error } = useFetchData(url + `/${items[0].id}`);
    console.log(data);

    return (
        <div className="">

        </div>
    )
}
