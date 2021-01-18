import React, { useRef, /* useEffect, useCallback  */} from 'react';
import { useSpring, animated } from 'react-spring';
import API from '../../../../reducers/api';
import './user.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { red,blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';


export const Adnewuser = (props) => {
    const animation = useSpring({
      config: { duration: 250 },
      opacity: props.showModal ? 1 : 0,
      transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    const closeModal = e => { if (modalRef.current === e.target) { props.close(); } };
    const GreenCheckbox = withStyles({
        root: {
          color: blue[400],
          '&$checked': {
            color: red[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
    
    const modalRef = useRef();
    const [state, setState] = React.useState({
        login_name:'',
        login_pass:'',
        person_name:'',
        email:'',
        is_admin:false,
        is_active:true
    });
    const createEvent = () =>{ API.post( "/api/event/dictinarycreateroom", { state }) };
    const handleChecked = (event) => { setState({ ...state, [event.target.name]: event.target.checked }); };

    return (
        <>
            { props.showModal ? (
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="room-modalwrapper">
                            <div className="modal-header">
                                <p className="modal-title h2">Calendar Create Person</p>
                                <div className="closebutton" aria-label='Close modal' onClick={() => props.close()}> <CloseIcon className="modal-close" /></div>
                            </div>
                            <div className="content-form">
                                <form  noValidate autoComplete="off">
                                    <div className="content-form-name">
                                        <div className="content-form-name1">
                                            <IconButton  aria-label="menu"> <MenuIcon /> </IconButton>
                                            <InputBase className="maintitle" placeholder="Login" autoFocus={true} name="login_name" onChange={(event)=> setState({ ...state, login_name: event.target.value })}/>
                                        </div>
                                        <div className="content-form-name2">
                                            <ListItem onClick={createEvent}  className="btn btn-primary" button> <p style={{ fontWeight: "bold"}}> <>Save</>{" "}</p></ListItem>
                                        </div>
                                    </div>
                                    <div className="user-size">
                                        <div className="user-size-add">
                                            <div className="form-room-left">
                                                <TextField style={{ width: "14em"}} 
                                                    InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start" style={{cursor:"default"}}>
                                        
                                                        </InputAdornment >
                                                    )}}
                                                id="outlined-select-currency-native" variant="outlined" label="Password" />
                                                <TextField style={{ width: "14em"}} 
                                                    InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start" style={{cursor:"default"}}>
                                        
                                                        </InputAdornment >
                                                    )}}
                                                id="outlined-select-currency-native" variant="outlined" label="Conform Password" />
                                            </div>
                                            <div className="form-room-rigth">
                                                <TextField style={{ width: "14em"}} 
                                                    InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start" style={{cursor:"default"}}>
                                        
                                                        </InputAdornment >
                                                    )}}
                                                id="outlined-select-currency-native" variant="outlined" label="Email" />
                                                <TextField style={{ width: "14em"}} 
                                                    InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start" style={{cursor:"default"}}>
                                        
                                                        </InputAdornment >
                                                    )}}
                                                id="outlined-select-currency-native" variant="outlined" label="Person Name" />
                                            </div>
                                        </div>
                                        <div className="checkbox-user">
                                            <FormControlLabel
                                                control={<GreenCheckbox checked={state.is_admin} onChange={handleChecked} name="is_admin" />}
                                                label="Admin Guard"
                                            />
                                            <FormControlLabel
                                                control={
                                                <GreenCheckbox
                                                    checked={state.is_active}
                                                    onChange={handleChecked} 
                                                    name="is_active"
                                                    color="primary"
                                                />
                                                }
                                                label="Block Person"
                                            />
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