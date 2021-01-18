import React, { useRef, /* useEffect, useCallback  */} from 'react';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import { red,blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import moment from "moment";
import PlaceIcon from '@material-ui/icons/Place';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from "@material-ui/core/InputAdornment";

import {useSelector} from 'react-redux';
import API from '../../../../reducers/api';

import './event.css';

export const Eventcal = (props) => {
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

  const isAuth = useSelector(state => state.user);
  const modalRef = useRef();
  const [state, setState] = React.useState({
    event_name:'',
    room_name:'',
    person_name:isAuth.currentUser.personName || 'Guest',
    date1 : moment().format('YYYY-MM-DDT09:00:00'),
    date2 : moment().format('YYYY-MM-DDT19:00:00'),
    event_start:'',
    event_end:'',
    defroom_name:'',
    checkedAll: false,
    checkedRepeat: false,
  });

  const handleChecked = (event) => { setState({ ...state, [event.target.name]: event.target.checked }); };
  const createEvent = () =>{ API.post( "/api/event/createevent", { state }) };

/*   const freetime = () =>{
    API.get("/api/get/calendarselectroom").then((resp) => {
      this.setState(() => ({ room: resp.data }));
    })
  } */
  return (
    <>
    { props.showModal ? (
        <div className="background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            { state.event_start!=='' && state.event_end!=='' && <div className="calendar-input-time">
              <div className="calendar-input-time-head" >
                Свободно = Как будет выглядеть) галка или крест)
              </div>
              <div className="calendar-input-time-content">
                <div className="calendar-input-time-content-event">
                    <div></div>
                    <div></div>
                </div>
                <div className="calendar-input-time-content-time"></div>
                INfo
              </div>
            </div>}
            <div  className="modalwrapper">
              <div className="modal-header">
                <p className="modal-title h2">Calendar Create Events</p>
                <div className="closebutton" aria-label='Close modal' onClick={() => props.close()}> <CloseIcon className="modal-close" /></div>
              </div>
              <div className="content-form">
                <form  noValidate autoComplete="off">
                  <div className="content-form-name">
                      <div className="content-form-name1">
                        <IconButton  aria-label="menu"> <MenuIcon /> </IconButton>
                        <InputBase className="maintitle" placeholder="Event Name" autoFocus={true} name="event_name" onChange={(event)=> setState({ ...state, event_name: event.target.value })}/>
                      </div>
                     <div className="content-form-name2">
                      <ListItem onClick={createEvent}  className="btn btn-primary" button>
                              <p style={{ fontWeight: "bold"}}> <>Save</>{" "}</p>
                      </ListItem>
                    </div>
                  </div>
                  <div className="checkbox-event">
                      <FormControlLabel
                        control={<GreenCheckbox checked={state.checkedAll} onChange={handleChecked} name="checkedAll" />}
                        label="All working day"
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={state.checkedRepeat}
                            onChange={handleChecked} 
                            name="checkedRepeat"
                            color="primary"
                          />
                        }
                        label="Repeat"
                      />
                  </div>
                  {!state.checkedAll && <div className="content-event">
                    <TextField className="mar"
                      label="From"
                      type="datetime-local"
                      name="event_start" 
                      onChange={(event)=> setState({ ...state, event_start: event.target.value })}
                      inputProps={{ style: { fontSize: "0.95rem" } }} 
                      defaultValue={state.date1}
                      variant="outlined"
                      InputLabelProps={{
                      shrink: true,
                      }}
                    />
                    <TextField className="mar"
                      variant="outlined"
                      label="To"
                      name="event_end" 
                      onChange={(event)=> setState({ ...state, event_end: event.target.value })}
                      defaultValue={state.date2}
                      inputProps={{ style: { fontSize: "0.95rem" } }} 
                      type="datetime-local"
                      InputLabelProps={{
                      shrink: true,
                      }}
                    /> 
                  </div>}
                  { state.checkedAll && <div className="content-event">
                    <TextField className="mar"
                      label="From"
                      type="datetime-local"
                      name="event_start" 
                      disabled
                      inputProps={{ style: { fontSize: "0.95rem" } }} 
                      defaultValue={state.date1}
                      variant="outlined"
                      InputLabelProps={{
                      shrink: true,
                      }}
                    />
                    <TextField className="mar"
                      variant="outlined"
                      label="To"
                      name="event_end"
                      disabled 
                      defaultValue={state.date2}
                      inputProps={{ style: { fontSize: "0.95rem" } }} 
                      type="datetime-local"
                      InputLabelProps={{
                      shrink: true,
                      }}
                    /> 
                  </div>}
                  <div className="event-info">
                    Event Details
                  </div>
                  <div className="event-details">
                    <div className="event-details1">
                      <TextField
                          id="outlined-select-currency-native"
                          select
                          style={{ width: "14em"}} 
                          onChange={(event)=> setState({ ...state, room_name: event.target.value })}
                          value={(state.room_name)}
                          name="room_name"
                          variant="outlined"
                          label="Room Name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PlaceIcon />
                              </InputAdornment >
                            )
                          }} 
                        >
                          {props.room.map((option) => (
                            <MenuItem  key={option.room_name} name="room_name" value={option.room_name}> {option.room_name} </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      { !isAuth.isAuth &&
                      <div className="event-details2">
                        <TextField  disabled style={{ width: "14em"}} 
                        InputProps={{readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircleIcon />
                            </InputAdornment >
                          )
                        }}
                        id="outlined-select-currency-native" variant="outlined" label="Person" defaultValue="Guest" />
                      </div>
                      }
                      { isAuth.isAuth &&
                      <div className="event-details2">
                        <TextField  disabled style={{ width: "14em"}} 
                        InputProps={{readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircleIcon />
                            </InputAdornment >
                          )
                        }}
                        id="outlined-select-currency-native"  name="person_name" variant="outlined" label="Person" value={isAuth.currentUser.personName} />
                      </div>
                      }
                  </div>
                </form>
              </div>
            </div>
          </animated.div>
        </div>
    ) : null}
    </>
)}


/*   const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && props.showModal) {
        props.close();
      }
    },
    [props.setShowModal, props.showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
 */