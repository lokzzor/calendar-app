import React, { Component } from 'react'
import './header.css';

import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core/';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HomeIcon from '@material-ui/icons/Home';

export default class AppHeader extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo">
                            <EventNoteIcon />&nbsp;<p style={{paddingBottom: "2%"}}>React Calendar</p>
                        </Link>
                        <div className="menu">
                            <div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/"><HomeIcon className="navicons menu-icon"/></Link>
                                </IconButton>
                                <Link className="link" to="/">Home</Link>
                            </div>
                            <div>
                                <div className="test"><mark className="big swing">0</mark></div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/event-list"><EventAvailableIcon className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/event-list">Event</Link>
                            </div>
                            <div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/dictionary"><SettingsApplicationsIcon className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/dictionary">Dictionary</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}