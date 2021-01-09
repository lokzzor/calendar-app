import React from 'react'
import './header.css';

import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core/';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../../reducers/userReducer'

    const AppHeader =() =>{
        const isAuth = useSelector(state => state.user.isAuth);
        const dispatch = useDispatch();
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
                            { isAuth && <div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/dictionary"><SettingsApplicationsIcon className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/dictionary">Dictionary</Link>
                            </div>}
                            { !isAuth && <div>
                                <IconButton color="inherit">
                                    <Link className="link" to="/account"><TouchAppIcon className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/account">Sing In</Link>
                            </div>}
                            { isAuth && <div  onClick={() => { dispatch(logout()) }}>
                                <IconButton color="inherit">
                                    <Link to="/#" className="link"><MeetingRoomIcon className="navicons menu-icon" /></Link>
                                </IconButton>
                                <Link className="link" to="/#"  >Log Out</Link>
                            </div>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
export default AppHeader;