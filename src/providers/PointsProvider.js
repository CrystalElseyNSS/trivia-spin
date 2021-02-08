import React, { createContext, useState } from 'react';

export const PointsContext = createContext()

export const PointsProvider = ({ children }) => {
    const [gameOverText, setGameOverText] = useState("")

    const addPoints = (points, attendee) => {
        fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/checkPlatinumStatusFromGame?attendee=${attendee}`)
            .then(response => response.json())
            .then(data => {
                console.log("data: " + data)
                if (data === false) {
                    setGameOverText('NOT YET ELIGIBLE FOR POINTS. SEE LEADERBOARD FOR RULES!')
                } else if (data === true) {
                    setGameOverText(`${points} POINTS!`)
                    // return fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/addPoints?points=${points}&attendee=${attendee}&awarded=${booth}wheelgame`)
                    return fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/addUnlimitedPoints?points=${points}&attendee=${attendee}`)
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