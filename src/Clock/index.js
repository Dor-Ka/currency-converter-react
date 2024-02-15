import { useState, useEffect } from "react";
import "./style.css";

const formattedDate = (currentDate) => currentDate.toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
});

const formattedTime = (currentDate) => currentDate.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});


const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalClockId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalClockId);
        };
    }, []);

    return (
        <div className="clock">
            {formattedDate(currentDate)}
            {", "}
            {formattedTime(currentDate)}
        </div>
    )
}

export default Clock;