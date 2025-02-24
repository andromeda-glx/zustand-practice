import Product from "../components/Product";
import { useFetchData } from "../hooks/useFetchData";
import Spinner from "../components/Spinner";

export default function Home() {
    const url = ['https://dummyjson.com/products'];
    const { data, isLoading, error } = useFetchData(url);
    const products = data && data[0].data.products || null;
    

    return (
        <>
            <div>
                <h1 className="text-3xl font-semibold mb-5">All Products</h1>
                {!error ? isLoading ? <Spinner /> : products &&
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5">
                        {products && products?.map(({ id, title, images, price }) => {
                            return <li key={id}>
                                <Product id={id} title={title} images={images} price={price} />
                            </li>
                        })}
                    </ul>
                    :
                    <h2>Network Error. {error.message}</h2>
                }
            </div>
        </>
    )
}
