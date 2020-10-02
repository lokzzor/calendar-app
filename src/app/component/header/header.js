import React, { Component } from 'react'
import './header.css';

import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons';
import EventNoteIcon from '@material-ui/icons/EventNote';

export default class AppHeader extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo">
                            <EventNoteIcon />&nbsp;React Calendar
                        </Link>
                        <IconButton color="inherit">
                            <Link style={{ textDecoration: "none", color: "white", lineHeight: "0" }} to="/login"><AccountCircle className="navicons" style={{ fontSize: "2.05rem" }} /></Link>
                        </IconButton>
                    </div>
                </div>
            </>
        )
    }
}