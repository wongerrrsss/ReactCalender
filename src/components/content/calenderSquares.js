import React from 'react'

import CalenderSquare from "./calenderSquare"

export default function calenderSquares(props) {
    function renderSquares() {
        const squaresList = []

        for (let i=1; i<=props.startDay; i++) {
            let date = props.daysInPreviousMonth - (props.startDay - i)
            squaresList.push(<CalenderSquare key={`P${i}`} date={date} inactive={true} />)
        }

        for (let i=1; i<=props.daysInMonth; i++) {
            squaresList.push(<CalenderSquare 
                            key={i} 
                            date={i}
                            month={props.month}
                            year={props.year}
                            />)
        }

        for (let i=1; i<=(42 - (props.daysInMonth + props.startDay)) ; i++) {
            squaresList.push(<CalenderSquare key={`N${i}`} date={i} inactive={true} />)
        }

        return squaresList
    }

    return (
        <div className="calender-squares">
            {renderSquares()}
        </div>
    )
}