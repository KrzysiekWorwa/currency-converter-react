import React, { useState, useEffect } from "react";
import "./style.css"


export const DateCounter = () => {

    const [date, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="date">Dzisiaj jest {date.toLocaleString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })}
        </div>
    )
}