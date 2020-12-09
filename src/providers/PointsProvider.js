import React, { createContext } from 'react';


export const PointsContext = createContext()

export const PointsProvider = ({ children }) => {

    const addPoints = ( points ) => {
        return fetch(`https://us-central1-leo-arcade.cloudfunctions.net/addIFramePoints?points=${points}&game=wheel`)
        .then(res => res.json())
    }

    const addUserPoints = ( points, player ) => {
        return fetch(`https://us-central1-leo-arcade.cloudfunctions.net/addPoints?points=${points}&player=${player}`)
        .then(res => res.json())
    }

    return (
        <>
            <PointsContext.Provider value={{ addPoints, addUserPoints }}>
                {children}
            </PointsContext.Provider>
        </>
    )
}