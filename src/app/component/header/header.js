import React, { Component } from 'react'
import './header.css';

import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

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
                                    <Link className="link" to="/login"><NewReleasesIcon className="navicons menu-icon"/></Link>
                                </IconButton>
                                <Link className="link" to="/login">News</Link>
                            </div>
                            <div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/login"><EventAvailableIcon className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/login">Event</Link>
                            </div>
                            <div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/login"><AccountCircle className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/login">Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}