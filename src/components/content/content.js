import React from 'react'

import DaysOfWeek from "./DaysOfWeek"
import CalenderSquares from "./calenderSquares"

export default function content(props) {
    return (
        <div className="content">
            <DaysOfWeek />
            <CalenderSquares 
            daysInMonth={props.daysInMonth}
            daysInPreviousMonth={props.daysInPreviousMonth}
            startDay={props.startDay}
            month={props.month}
            year={props.year} />
        </div> 
    )
}