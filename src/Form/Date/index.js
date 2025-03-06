import React, { useState, useEffect } from "react";
import "./style.css"


export const DateCounter = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const day = currentDate.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const time = currentDate.toLocaleTimeString();
    const dateAndTime = `${day}, ${time}`;


    return (
        <div className="date">Dzisiaj jest {dateAndTime}</div>
    );
}