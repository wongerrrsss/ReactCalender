import React, { Component } from 'react'



export default class CalenderSquare extends Component {
    constructor() {
        super()

        this.state = {
            value: "",
            postID: undefined
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.month && this.props.year) {
            this.queryAPI()
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
            this.queryAPI() 
        }
        
    }

    queryAPI() {
        fetch(`https://tc-react-calendar-api.herokuapp.com/127.0.0.1:5000/calendar-inputs/${this.props.date}/${this.props.month}/${this.props.year}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                this.setState({
                    value: data[1],
                    postID: data[0]
                })    
                }
                else {
                    this.setState({value: "",
                    postID: undefined
                })
                }
            }) 

            .catch(error => console.log(error)) 
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit() {
        let url
        let method
      

        if (this.state.value.length > 0 && this.state.postID == undefined) {
            let url = "https://tc-react-calendar-api.herokuapp.com/127.0.0.1:5000/calendar-input/post"
            let method = "POST"
        }
        else if (this.state.value.length > 0 && this.state.postID) {
            let url = `https://tc-react-calendar-api.herokuapp.com/127.0.0.1:5000/calendar_inputs/update/${this.state.postID}`
            let method = "PUT"
        }
        else if (this.state.value.length > 0 && this.state.postID) {
            let url = `https://tc-react-calendar-api.herokuapp.com/127.0.0.1:5000/calendar_inputs/delete/${this.state.postID}`
            let method = "DELETE"
        }
       

        fetch(url, {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                content: this.state.value,
                date: this.props.date,
                month: this.props.month,
                year: this.props.year
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className={`calender-square ${this.props.inactive ? "overflow-day" : ""}`}>
                <div>{this.props.date}</div>
                <input type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                onBlur={this.handleSubmit}
                disabled={this.props.inactive ? true : false} />
            </div>
        )
    }
}