import React, { Component } from 'react'
import './smcalendar.css';

import moment from "moment";
import ListItem from "@material-ui/core/ListItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";


export default class Smcalendar extends Component {
    render() {
        return (
            <>
                <div className="sidenav box-radius">
                    <h2 className="titular cursor side">
                        {moment(new Date()).format("dddd")}
                    </h2>
                </div>
                <div className="small-header-cal-date cursor">
                    {moment(new Date()).format("DD")}
                </div>
                <div className="small-header-cal-eventlist">
                    <p className="title-listevent cursor">Curent Event:</p>
                    <ol className="color-with-svg">
                        <li>There are no scheduled events today</li>
                    </ol>
                </div>
                <div className="small-header-cal-eventadd">
                    <ListItem className="side-button" button>
                        <p className="title-menu add-func-event">
                            <>Create an Event</>{" "}
                            <AddCircleIcon style={{ marginLeft: "3%" }} />
                        </p>
                    </ListItem>
                </div>
            </>
        )
    }
}