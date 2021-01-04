import React, { useRef, /* useEffect, useCallback  */} from 'react';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from "axios";
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import { red,blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import moment from "moment";
import MenuItem from '@material-ui/core/MenuItem';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import './event.css';
//import axios from "axios";

export const Eventcal = (props) => {
  const modalRef = useRef();
  const [state, setState] = React.useState({
    event_name:'',
    room_name:'',
    person_id:'',
    event_start:'',
    date1 : moment().format('YYYY-MM-DDT09:00:00'),
    date2 : moment().format('YYYY-MM-DDT19:00:00'),
    event_end:'',
    checkedAll: false,
    checkedRepeat: false,
  });
  const changeHandle = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleChange = (event) => {
    console.log(state.event_start)
    setState({ ...state, [event.target.name]: event.target.checked });
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
  const GreenCheckbox = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
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
                      <div className="content-form-name1">
                        <IconButton  aria-label="menu"> <MenuIcon /> </IconButton>
                        <InputBase className="maintitle"   placeholder="Event Name" autoFocus={true} name="event_name" onChange={changeHandle}/>
                      </div>
                     <div className="content-form-name2">
                      <ListItem onClick={createEvent} className="btn btn-primary" button>
                              <p className=""> <>Save</>{" "}</p>
                      </ListItem>
                    </div>
                  </div>
                  <div className="checkbox-event">
                    
                      <FormControlLabel
                        control={<GreenCheckbox checked={state.checkedAll} onChange={handleChange} name="checkedAll" />}
                        label="All day"
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={state.checkedRepeat}
                            onChange={handleChange} 
                            name="checkedRepeat"
                            color="primary"
                          />
                        }
                        label="Repeat"
                      />
                  </div>
                  <div className="content-event">
                    <TextField className="mar"
                      label="From"
                      type="datetime-local"
                      name="event_start" 
                      onChange={changeHandle}
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
                      onChange={changeHandle}
                      defaultValue={state.date2}
                      inputProps={{ style: { fontSize: "0.95rem" } }} 
                      type="datetime-local"
                      InputLabelProps={{
                      shrink: true,
                      }}
                    /> 
                  </div>
                  <div className="event-info">
                    Event Details
                  </div>
                  <div className="event-details">
                    <div className="event-details1">
                      <TextField
                          id="outlined-select-currency-native"
                          select
                          defaultValue = ""
                          style={{ width: "14em"}}
                          label="Room Name"
                          name="room_name" 
                          onChange={changeHandle}
                          variant="outlined"
                        >
                          {props.room.map((option) => (
                            <MenuItem  key={option.room_name} value={option.room_name}> {option.room_name} </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      <div className="event-details2">
                        <TextField  disabled style={{ width: "14em"}} InputProps={{ readOnly: true, }} id="outlined-select-currency-native" variant="outlined" label="Person" defaultValue="Person" />
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