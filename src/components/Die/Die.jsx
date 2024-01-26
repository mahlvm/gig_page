
import React, { useState } from "react";
import "./Die.css"; 

const Die = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
        console.log("Clicked!");
    };

    return (
        <>
            <button className="button-like" onClick={handleClick}>
                Rock it! 🤘 <span className="click-counter">{clickCount}</span>
            </button>
        </>
        );
};

export default Die;