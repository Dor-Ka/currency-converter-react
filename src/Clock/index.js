import { useState, useEffect } from "react";
import "./style.css";

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
            {currentDate.toLocaleString(undefined, {
                weekday: "short",
                day: "numeric",
                month: "numeric",
                year: "numeric",
            })}
            {", "}
            {currentDate.toLocaleString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </div>
    )
}

export default Clock;