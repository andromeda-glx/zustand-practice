import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(urls) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchData(aUrls) {
        try {
            const responses = await Promise.all(aUrls.map(aUrl => axios.get(aUrl)));
            setData(responses);
        }
        catch(error){
            setError(error);
        }
        finally{
            setIsLoading(false);
        }
    }


    useEffect(() => {
        setIsLoading(true);
        fetchData(urls);
    }, [urls.length])

    return { data, isLoading, error };
}