import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [Is_pending, setIs_pending] = useState(true);

    useEffect(() => {

        console.log('use effect ran')
        fetch(url)
            .then(res => {
                return res.json();

            })
            .then(data => {
                setData(data);
                setIs_pending(false);
            });
    }, [url]);

    return {data, Is_pending};

}

export default useFetch;