import Product from "../components/Product";
import { useFetchData } from "../hooks/useFetchData";
import Spinner from "../components/Spinner";

export default function Home() {
    const url = 'https://dummyjson.com/products';
    const { data: res, isLoading, error } = useFetchData(url);
    const products = res?.data.products;
    

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-5">All Products</h1>
            { !error ? isLoading ? <Spinner /> :
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5 2xl:grid-cols-6">
                    {products && products?.map(({ id, title, images, price }) => {
                        return <li key={id}>
                            {console.log(id)}
                            <Product title={title} images={images} price={price} />
                        </li>
                    })}
                </ul>
                :
                <h2>Network Error. {error.message}</h2>
            }
        </div>
    )
}
