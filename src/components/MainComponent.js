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
            <p style={{ color: "green", fontsize: "50px" }}> Good {timeofDay}</p>

        </div>
    );
}

export default MainComponent;