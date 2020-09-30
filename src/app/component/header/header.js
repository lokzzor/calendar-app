import React, { Component } from 'react'
import './header.css';

import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons';


export default class AppHeader extends Component {

    render() {
        return (
            <>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo">
                            React Calendar
                        </Link>
                        <IconButton color="inherit">
                            <Link style={{ textDecoration: "none", color: "white", lineHeight: "0" }} to="/login"><AccountCircle style={{width: "1.25em", height: "1.18em"}}/></Link>
                        </IconButton>
                    </div>
                </div>
            </>
        )
    }
}