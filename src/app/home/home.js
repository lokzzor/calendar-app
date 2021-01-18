import React, { Component } from "react";
import "./home.css";

/* Add */
import Smcalendar from "../component/other/smallcalendar/smcalendar.js"
import Calendar from "../component/other/calendar/calendar.js"
import Firstchart from "../component/other/charts/firstchart.js"
import Secondchart from "../component/other/charts/secondchart.js"
import Weather from "../component/other/weather/weather.js"
import Profile from "../component/other/profile/profile"
/*  */

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import omus from "../component/other/weather/img/omus.png";

export default class Home extends Component {

  render() {
    const scrollTop = () =>{ window.scrollTo({top: 0, behavior: 'smooth'}); };
    return (
      <div className="main-container">
          <Profile />
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
              <ExpandLessIcon  onClick={scrollTop} className="icon-top"/>
          </a>
        </div>
      </div>
    );
  }

}
