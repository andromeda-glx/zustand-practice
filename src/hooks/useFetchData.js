import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(urls) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    function fetchData(aUrls) {
        console.log(aUrls);
        const allData = [];

        aUrls.forEach(aUrl => (
            axios.get(aUrl)
                .then(res => {
                    allData.push(res.data)
                    setData(allData);
                })
                .catch(e => setError(e))
                .finally(() => setIsLoading(false))
        ))
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData(urls);
    }, [urls.length])

    return { data, isLoading, error };
}