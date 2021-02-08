import React, { createContext, useState } from 'react';

export const PointsContext = createContext()

export const PointsProvider = ({ children }) => {
    const [gameOverText, setGameOverText] = useState("")

    const addPoints = (points, attendee, booth) => {
        fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/checkPlatinumStatusFromGame?attendee=${attendee}`)
            .then(response => response.json())
            .then(data => {
                console.log("data: " + data)
                if (data === false) {
                    setGameOverText('Visit all Platinum booths to earn points')
                } else if (data === true) {
                    setGameOverText(`${points} POINTS!`)
                    return fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/addPoints?points=${points}&attendee=${attendee}&awarded=${booth}wheelgame`)
                        .then(response => response.json())
                }
            })
    }

    return (
        <>
            <PointsContext.Provider value={{ addPoints, gameOverText }}>
                {children}
            </PointsContext.Provider>
        </>
    )
}