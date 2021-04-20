import React from 'react';

function MainComponent() {
    const date = new Date();
    const hours = date.getHours();
    var timeofDay;

    if (hours < 12) {
        timeofDay = "morning";
    }
    else if (hours >= 12 && hours < 17) {
        timeofDay = "afternoon";
    }
    else {
        timeofDay = "night";
    }
    return (
        <div className="main">
            <h1> Good {timeofDay}</h1>
            <img src="flower-removebg-preview.png" alt="flower"></img>
        </div>
    );
}

export default MainComponent;