import React, { useRef, /* useEffect, useCallback  */} from 'react';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from "@material-ui/core/ListItem";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import './event.css';
//import axios from "axios";

export const Eventcal = (props) => {
  const modalRef = useRef();
  const [state, setState] = React.useState({
    checkedA: true,
    event_name:'',
    room_name:'',
    person_id:'',
    event_start:'',
    event_end:''
  });
  const changeHandle = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      props.close();
    }
  };

  const createEvent = () =>{
    axios.post( "/api/get/calendarpostevent", { state }).then((resp) => {
    })
  }

  return (
    <>
    { props.showModal ? (
        <div className="background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modalwrapper">
              <div className="modal-header">
                <p className="modal-title h2">Calendar Create Events</p>
                <div className="closebutton" aria-label='Close modal' onClick={() => props.close()}> <CloseIcon className="modal-close" /></div>
              </div>
              <div className="content-form">
                <form  noValidate autoComplete="off">
                  <div className="content-form-name">
                    <Paper component="form" className="papper">
                      <div className="content-form-name1">
                        <IconButton  aria-label="menu"> <MenuIcon /> </IconButton>
                        <InputBase className="maintitle" placeholder="Event Name" autoFocus={true} name="event_name" onChange={changeHandle}/>
                      </div>
                    </Paper>
                     <div className="content-form-name2">
                      <ListItem onClick={createEvent} className="btn btn-primary" button>
                              <p className=""> <>Save</>{" "}</p>
                      </ListItem>
                    </div>
                  </div>
                  <div className="content-form-other">
                    <div className="">
                      
                    </div>
                    <div className="">

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </animated.div>
        </div>
    ) : null}
    </>
)}


/* 

                      <div className="addmore"><AddCircleIcon/> <span style={{ paddingLeft: "0.2rem"}}> Add more details</span></div>



                    <TextField autoFocus={true} className="mar" name="event_name" onChange={changeHandle} id="outlined-basic" label="Event Name" variant="outlined" />
                     <TextField
                      id="outlined-select-currency-native"
                      select
                      defaultValue = ""
                      label="Room Name"
                      name="room_name" 
                      onChange={changeHandle}
                      className="mar"
                      variant="outlined"
                    >
                      {props.room.map((option) => (
                        <MenuItem  key={option.room_name} value={option.room_name}> {option.room_name} </MenuItem>
                      ))}
                    </TextField>

                    <TextField className="mar" InputProps={{ readOnly: true, }} id="outlined-select-currency-native" variant="outlined" label="Person" defaultValue="Person" />
                    <Grid style={{ justifyContent: "center"}} component="label" container alignItems="center" spacing={1}>
                      <Grid item>All day</Grid>
                      <Grid item>
                        <Switch
                          //checked={state.checkedA}
                      
value="checkedA"
/>
</Grid>
<Grid item>Custom</Grid>
</Grid>
<TextField className="mar"
label="From"
type="datetime-local"
name="event_start" 
onChange={changeHandle}
variant="outlined"
InputLabelProps={{
shrink: true,
}}
/>
<TextField className="mar"
variant="outlined"
label="To"
name="event_end" 
onChange={changeHandle}
type="datetime-local"
InputLabelProps={{
shrink: true,
}}
/> 

*/
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