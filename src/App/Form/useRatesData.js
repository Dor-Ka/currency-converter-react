import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
    // rates: "null",
    // date: "null",
  });

  useEffect(() => {
    const fatchRates = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_uhik6OejdNTjJIO3bxhlEUSeL4mc13bBb1UrUwK2&currencies=&base_currency=PLN&currencies[]=EUR&currencies[]=USD&currencies[]=GBP&currencies[]=CHF"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { data, meta } = await response.json();

        setRatesData({
          state: "success",
          rates: data,
          date: meta.last_updated_at,
        });

      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fatchRates, 2000);
  }, []);
  return ratesData;
};
