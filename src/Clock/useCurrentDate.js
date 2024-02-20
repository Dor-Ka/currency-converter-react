import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalClockId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalClockId);
    };
  }, []);

  return currentDate;
};
