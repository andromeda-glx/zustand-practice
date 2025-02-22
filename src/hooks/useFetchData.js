import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    function fetchData(aUrl) {
        axios.get(aUrl)
        .then(res => setData(res))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData(url);
    }, [url])

    return {data, isLoading, error};
}