import { useState, useEffect } from "react";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_CWenLhHtNlJY5tRSVmBwOHzGd99IKc1vY5MbCZGc&base_currency=PLN");

                if(!response.ok) {
                    throw new Error(response.statusText);
                }

                const {data, meta} = await response.json();

                setRatesData({
                    state: "success",
                    data,
                    meta,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};