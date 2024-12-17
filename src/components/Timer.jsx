import React, { useState, useEffect } from "react";
import "../sass/weeklySale.scss"

const Timer = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 100);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                day: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minute: Math.floor((difference / (1000 * 60)) % 60),
                second: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { day: 0, hour: 0, minute: 0, second: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div className="timerBox">
            <div className="box">
                <span>Day</span>
                 <p className = "timerElement">{timeLeft.day}</p>
            </div>
            <div className="box">
                <span>Hour</span> <p className = "timerElement">{timeLeft.hour}</p></div>
            <div className="box">
                <span>Miunte</span> <p className = "timerElement">{timeLeft.minute}</p></div>
            <div className="box">
                <span>Second</span> <p className = "timerElement">{timeLeft.second}</p></div>

        </div>
    );
};

export default Timer;
