import React, { Component } from "react";
import "./home.css";
import { Link } from 'react-router-dom'

/* Add */
import Smcalendar from "../component/other/smallcalendar/smcalendar.js"
import Calendar from "../component/other/calendar/calendar.js"
import Firstchart from "../component/other/charts/firstchart.js"
import Secondchart from "../component/other/charts/secondchart.js"
import Weather from "../component/other/weather/weather.js"
/*  */

import ScrollableAnchor from "react-scrollable-anchor";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { configureAnchors } from "react-scrollable-anchor";
import omus from "../component/other/weather/img/omus.png";

export default class Home extends Component {
  componentDidMount() {
    configureAnchors({ offset: -222, scrollDuration: 200 });
  }
  render() {
    return (
      <div className="main-container">
        <ScrollableAnchor id={"up"}>
          <div className="sidenav box-radius">
            <h2 className="titular cursor">Account</h2>
            <div className="account-template">
              <div className="account-icon">
              <Link to="/account"><img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt=""/></Link>
              </div>
              <div className="account-name">
                <h1>Guest</h1>
                <hr className="hr-line"></hr>
              </div>
              
              <div className="account-but">
                <Link className="account-button" to="/account">Sing In</Link>
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

        </ScrollableAnchor>
        <div className="small-calendar box-radius">
          <Smcalendar />
        </div>
        <div className="weather box-radius">
          <Weather/>
        </div>
        <div className="cloud-service box-radius">
          <div className="cloudcss">
            <a href="http://www.jinr.ru/main-en/">
              <img
                src="https://nica.jinr.ru/images/jinr-logo-eng.png"
                height="100"
                alt=""
              />
            </a>
          </div>
          <div className="cloudcss">
            <a href="http://omus.jinr.ru/">
              <img src={omus} height="100" alt="" />
            </a>
          </div>
        </div>
        <div className="chart-state box-radius">
          <Firstchart />
        </div>
        <div className="room-event box-radius">
          <Secondchart />
        </div>
          <div className="calendar box-radius-top">
            <Calendar />
          </div>

        <div className="top">
          <a href="#up">
              <ExpandLessIcon  className="icon-top"/>
          </a>
        </div>
      </div>
    );
  }

}
