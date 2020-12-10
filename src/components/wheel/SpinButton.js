import React from 'react';
import './Wheel.css';

export const SpinButton = (isStarted) => {
    
    console.log(isStarted)

    if (isStarted === true) {

        return (
            <>
                <div id="btn--spin">
                    <img src="https://eventfinity-production-assets.s3.amazonaws.com/materials/742941/original/SPIN.png" alt="spin button" />
                </div>
            </>
        )
    } return (<div></div>)
}