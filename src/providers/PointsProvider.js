import React, { createContext, useState } from 'react';

export const PointsContext = createContext()

export const PointsProvider = ({ children }) => {
    const [gameOverText, setGameOverText] = useState("")
    
    const addPoints = (points, attendee, booth) => {
        fetch(``)
            .then(response => response.json())
            .then(data => {
                if (data === false) {
                    setGameOverText('NOT YET ELIGIBLE FOR POINTS. SEE LEADERBOARD FOR RULES!')
                } else if (data === true) {
                    return fetch(``)
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