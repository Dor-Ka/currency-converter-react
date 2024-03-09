import { useEffect, useState } from "react";

const formatApiDate = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

export const useInfoDate = (ratesData) => {
  const [ratesDate, setRatesDate] = useState(new Date());

  useEffect(() => {
    if (ratesData.state === "success") {
      setRatesDate(new Date(ratesData.date));
    }
  }, [ratesData]);

  const formattedApiDate = ratesDate.toLocaleDateString(
    undefined,
    formatApiDate
  );

  return formattedApiDate;
};
