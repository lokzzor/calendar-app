import React, { Component } from "react";
import "./home.css";

/* Add */
import Smcalendar from "../component/smallcalendar/smcalendar.js"
import Calendar from "../component/calendar/calendar.js"
import News from "../component/news/news.js"
import Firstchart from "../component/charts/firstchart.js"
import Secondchart from "../component/charts/secondchart.js"
import Weather from "../component/weather/weather.js"
/*  */

import ListItem from "@material-ui/core/ListItem";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import omus from "../component/weather/img/omus.png";

export default class Home extends Component {
  componentDidMount() {
    configureAnchors({ offset: -95, scrollDuration: 200 });
  }
  render() {
    return (
      <div className="main-container">
        <ScrollableAnchor id={"up"}>
          <div className="sidenav box-radius">
            <h2 className="titular cursor">MENU</h2>
            <ul className="header-menu horizontal-list">
              <ListItem className="side-button" button>
                <HomeIcon className="icon-button" />
                <p className="title-menu">Home</p>
              </ListItem>
              <a href="#calendar">
                <ListItem className="side-button" button>
                  <EventIcon className="icon-button" />
                  <p className="title-menu">Calendar</p>
                </ListItem>
              </a>
              <a href="#news">
                <ListItem className="side-button" button>
                  <MenuBookIcon className="icon-button" />
                  <p className="title-menu">News</p>
                </ListItem>
              </a>
              <ListItem className="side-button" button>
                <SettingsApplicationsIcon className="icon-button" />
                <p className="title-menu">Settings</p>
              </ListItem>
              <ListItem className="side-button" button>
                <ContactSupportIcon className="icon-button" />
                <p className="title-menu">Tutorials</p>
              </ListItem>
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
        <ScrollableAnchor id={"calendar"}>
          <div className="calendar box-radius-top">
            <Calendar />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"news"}>
          <div className="news box-radius"><News /></div>
        </ScrollableAnchor>
        <div className="top">
          <a href="#up">
            <svg
              width="36"
              viewBox="0 0 491 491"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="up" clipPath="url(#clip0)">
                <path
                  id="circle"
                  d="M244.5 56C126.035 56 30 153.378 30 273.5C30 393.622 126.035 491 244.5 491C362.965 491 459 393.622 459 273.5C458.867 153.435 362.91 56.1356 244.5 56Z"
                  fill="#3468AF"
                />
                <path
                  id="arrow"
                  d="M259.214 236.911C251.037 227.696 237.782 227.696 229.606 236.911L152.27 324.188C139.91 338.126 139.91 360.719 152.27 374.657C164.794 388.148 184.514 388.148 197.038 374.657L209.602 360.493V451.658C209.602 473.386 225.226 491 244.5 491C263.774 491 279.398 473.386 279.398 451.658V360.493L291.962 374.657C304.486 388.148 324.206 388.148 336.73 374.657C349.09 360.719 349.09 338.126 336.73 324.188L259.214 236.911Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="490.667" height="490.667" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    );
  }

}
