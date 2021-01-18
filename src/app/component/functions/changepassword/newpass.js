import React, { useRef, /* useEffect, useCallback  */} from 'react';
import { useSpring, animated } from 'react-spring';
import API from '../../../../reducers/api';
import './newpass.css';

/* import TextField from '@material-ui/core/TextField';
 */import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
/* import InputAdornment from "@material-ui/core/InputAdornment";
 */
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import {useSelector} from 'react-redux';


export const ChangePassword = (props) => {
    const animation = useSpring({
      config: { duration: 250 },
      opacity: props.showModal ? 1 : 0,
      transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    const closeModal = e => { if (modalRef.current === e.target) { props.close(); } };
    const modalRef = useRef();
    const isAuth = useSelector(state => state.user);
    const [state, setState] = React.useState({
        login_name: isAuth.currentUser.personName || 'Guest',
        change_password:'',
        again_password:'',
    });
    const createEvent = () =>{ API.post( "/api/event/dictinarycreateroom", { state }) };

    return (
        <>
            { props.showModal ? (
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="room-modalwrapper">
                            <div className="modal-header">
                                <p className="modal-title h2">Person Change Password</p>
                                <div className="closebutton" aria-label='Close modal' onClick={() => props.close()}> <CloseIcon className="modal-close" /></div>
                            </div>
                            <div className="content-form">
                                <form  noValidate autoComplete="off">
                                    <div className="content-form-name">
                                        <div className="content-form-name1">
                                            <IconButton  aria-label="menu"> <MenuIcon /> </IconButton>
                                            <InputBase disabled className="maintitle" placeholder="Login" value={isAuth.currentUser.personName}/>
                                        </div>
                                        <div className="content-form-name2">
                                            <ListItem onClick={createEvent}  className="btn btn-primary" button> <p style={{ fontWeight: "bold"}}> <>Change</>{" "}</p></ListItem>
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