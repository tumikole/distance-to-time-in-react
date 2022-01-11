import React, { Component } from 'react'
import '../App.css'

export default class table extends Component {
    render() {
        return (
            <div className="listBody">
                <ol className="myList">


    {this.props.list.map((list, index) => {
        return (

    <div key={index}>
        <li>Item Name: {list.name}</li>
    </div>

        )
    })}



            </ol>
            </div>
        )
    }
}