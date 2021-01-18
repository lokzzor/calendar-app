import React, { useRef, /* useEffect, useCallback  */} from 'react';
import { useSpring, animated } from 'react-spring';
import API from '../../../../reducers/api';
import './room.css';

import TextField from '@material-ui/core/TextField';

import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";

import CloseIcon from '@material-ui/icons/Close';
import PlaceIcon from '@material-ui/icons/Place';
import DomainIcon from '@material-ui/icons/Domain';
import MenuIcon from '@material-ui/icons/Menu';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import DescriptionIcon from '@material-ui/icons/Description';

export const Roomcreate = (props) => {
    const animation = useSpring({
      config: { duration: 250 },
      opacity: props.showModal ? 1 : 0,
      transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    const closeModal = e => { if (modalRef.current === e.target) { props.close(); } };
    const modalRef = useRef();
    const [state, setState] = React.useState({
        room_name:'',
        building_number:'',
        room_number:'',
        capacity:'',
        description:''
    });
    const createEvent = () =>{ API.post( "/api/event/dictinarycreateroom", { state }) };

    return (
        <>
            { props.showModal ? (
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="room-modalwrapper">
                            <div className="modal-header">
                                <p className="modal-title h2">Calendar Create Room</p>
                                <div className="closebutton" aria-label='Close modal' onClick={() => props.close()}> <CloseIcon className="modal-close" /></div>
                            </div>
                            <div className="content-form">

                                <form  noValidate autoComplete="off">
                                    <div className="content-form-name">
                                        <div className="content-form-name1">
                                            <IconButton  aria-label="menu"> <MenuIcon /> </IconButton>
                                            <InputBase className="maintitle" placeholder="Room Name" autoFocus={true} name="event_name" onChange={(event)=> setState({ ...state, room_name: event.target.value })}/>
                                        </div>
                                        <div className="content-form-name2">
                                            <ListItem onClick={createEvent}  className="btn btn-primary" button> <p style={{ fontWeight: "bold"}}> <>Save</>{" "}</p></ListItem>
                                        </div>
                                    </div>
                                    <div className="room-side">
                                        <div className="form-room-content">
                                            <TextField style={{ width: "14em"}} 
                                                InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start" style={{cursor:"default"}}>
                                                        <DomainIcon />
                                                    </InputAdornment >
                                                )}}
                                            id="outlined-select-currency-native" variant="outlined" label="Building" />
                                            <TextField style={{ width: "14em"}} 
                                                InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start" style={{cursor:"default"}}>
                                                        <PlaceIcon />
                                                    </InputAdornment >
                                                )}}
                                            id="outlined-select-currency-native" variant="outlined" label="Room Number" />
                                            <TextField style={{ width: "14em"}} 
                                                InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start" style={{cursor:"default"}}>
                                                        <GroupWorkIcon />
                                                    </InputAdornment >
                                                )}}
                                            id="outlined-select-currency-native" variant="outlined" label="Capacity" />
                                            <TextField style={{ width: "14em"}} 
                                                InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start" style={{cursor:"default"}}>
                                                        <DescriptionIcon />
                                                    </InputAdornment >
                                                )}}
                                            id="outlined-select-currency-native" variant="outlined" label="Description" />
                                        </div>
                                        <div className="room-right-side">
                                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4eacb444836431.582047bcb4aa6.jpg" style={{objectFit: "fill",width:"100%"}} alt=""></img>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
}
