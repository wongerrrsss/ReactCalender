import React, { Component } from 'react';

import Header from "./header"
import Content from "./content/content.js"

import monthData from "../../static/assets/monthData"

export default class App extends Component {
  constructor() {
    super()

    this.state = monthData[1]

    this.changeMonth = this.changeMonth.bind(this)
    
  }

  changeMonth(direction) {
    if (direction === "+") {
      this.setState(monthData[this.state.id + 1])
    } else {
      this.setState(monthData[this.state.id - 1])                    
    }

    
  }
 
  render() {
    return (
      <div className='app'>
        <Header month={this.state.month} 
        changeMonth={this.changeMonth} />
        <Content 
        daysInMonth={this.state.daysInMonth} 
        daysInPreviousMonth={this.state.daysInPreviousMonth}
        startDay={this.state.startDay}
        month={this.state.month}
        year={this.state.year} />
        <div className="Footer">
        <h3>{this.state.year}</h3>
        </div>
      </div>
    );
  }
}