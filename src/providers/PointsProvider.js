import React, { createContext, useState } from 'react';

export const PointsContext = createContext()

export const PointsProvider = ({ children }) => {
    const [gameOverText, setGameOverText] = useState("")
    
    const addPoints = (points, attendee, booth) => {
        fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/checkPathStatusFromGame?attendee=${attendee}`)
            .then(response => response.json())
            .then(data => {
                if (data === false) {
                    setGameOverText('NOT YET ELIGIBLE FOR POINTS. SEE LEADERBOARD FOR RULES!')
                } else if (data === true) {
                    return fetch(`https://us-central1-sw-leaderboard.cloudfunctions.net/addPoints?points=${points}&attendee=${attendee}&awarded=${booth}wheelgame${points}`)
                        .then(response => response.text())
                        .then(text => {
                            if (text === "points already awarded for this action") {
                                setGameOverText("QUESTION ALREADY PLAYED. SPIN AGAIN!")
                            } else if (text === "points added!") {
                                setGameOverText(`WELL DONE! ${points} POINTS!`)
                            }
                        })
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