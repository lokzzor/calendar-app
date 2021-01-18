import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';
import {auth} from "../../../../actions/user";
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../../reducers/userReducer'

function Profile () {
    const isAuth = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth())
    }, [dispatch])

    return (
        <>
            <div className="sidenav box-radius">
                <h2 className="titular cursor">Account</h2>
                <div className="account-template">
                <div className="account-icon">
                <Link to="/account"><img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt=""/></Link>
                </div>
                <div className="account-name">
                    { !isAuth.isAuth && <h1>Guest</h1>}
                    { isAuth.isAuth && <h1>{ isAuth.currentUser.personName || 'Guest' }</h1>}
                    <hr className="hr-line"></hr>
                </div>
                
                <div className="account-but">
                    { !isAuth.isAuth && <Link className="account-button" to="/account">Sing In</Link>}
                    { isAuth.isAuth && <Link className="account-button" to="/" onClick={() => { dispatch(logout()) }} >Log Out</Link>}
                </div>
                
                </div>
                <ul className="profile-social-links">
                  <li>
                    <a href="/#">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" alt=""/>
                    </a>
                  </li>
                </ul>
          </div>
        </>
    )

}

export default Profile;