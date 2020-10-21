import React, { Component } from 'react'
import './calendar.css';

import ListItem from "@material-ui/core/ListItem";

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import axios from 'axios';
import moment from 'moment';



export default class AppCalendar extends Component {
    componentWillMount() { configureAnchors({offset: -95, scrollDuration: 200})}
    state = {
        currentMonth: moment(new Date()).format("YYYY-MM-DD"),
        selectedDate: moment(new Date()).format("YYYY-MM-DD"),
        URL: "http://localhost:8080",
        weather:{}
    };
    getWeather(){
        const api_key='596876ae90ac6935eb72f9671488da95';
        const id_key='Dubna';
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+id_key+'&appid='+api_key+'&units=metric')
            .then(resp => {
                this.setState.weather=Object.create(null);
                this.setState.weather.cloud=resp.data.clouds.all;
                this.setState.weather.wind=resp.data.wind.speed;
                this.setState.weather.temp=Math.round(resp.data.main.temp);
                this.setState.weather.tempfeels_like=Math.round(resp.data.main.feels_like);
                this.setState.weather.vlag=resp.data.main.humidity;
                this.setState.weather.descrip=resp.data.weather[0].description;
                this.setState.weather.main=resp.data.weather[0].main;
                this.setState.weather.icon=resp.data.weather[0].icon;
                console.log(this.setState.weather);
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    }
    renderHeader() {
/*         axios.get(this.state.URL+'/api/get/room').then(resp => {
            console.log(resp.data);
        }); */
        return (
            <div className="header-calendar box-radius-top">
                <div className="header-room">

                </div>
                <div className="header-func">
                    
                </div>
            </div>

/*                 <div className="month">
                    {moment(this.state.currentMonth).format('MMMM YYYY')}
                </div>
                <div style={{ flex: "1 1 auto" }}> </div>
                <div style={{}}>
                    <IconButton color="inherit" onClick={this.prevMonth}>
                        <div style={{ textDecoration: "none", color: "white", borderRadius: "100%", lineHeight: "0" }}><ArrowBackIosIcon style={{ width: "1.2em", height: "1.1em" }} /></div>
                    </IconButton>
                    <IconButton style={{marginRight: "1.5em"}} color="inherit" onClick={this.nextMonth}>
                        <div style={{ textDecoration: "none", color: "white", borderRadius: "100%", lineHeight: "0" }}><ArrowForwardIosIcon style={{ width: "1.2em", height: "1.1em"}} /></div>
                    </IconButton>
                    <IconButton color="inherit" onClick={this.nextMonth}>
                        <div style={{ textDecoration: "none", color: "white", borderRadius: "100%", lineHeight: "0" }}><AddCircleOutlineIcon style={{ width: "1.5em", height: "1.4em" }} /></div>
                    </IconButton>
                </div> */
        );
    }
    renderDays() {
        const days = [];
        let startDate = moment(this.state.currentMonth).startOf('week').isoWeekday(1);;
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {moment(startDate).add(i, 'days').format('dddd')}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }
    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = moment(currentMonth).startOf('month').toDate();
        const monthEnd = moment(monthStart).endOf('month').toDate();
        const startDate = moment(monthStart).startOf('week').toDate();
        const endDate = moment(monthEnd).endOf('week').toDate();

        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = moment(day).add(1, 'days').format('DD');
                const cloneDay = day;
                days.push(
                    <div className={`col cell ${!moment(day).add(1, 'days').isSame(monthStart, 'month')
                        ? "disabled"
                        : moment(day).add(1, 'days').isSame(selectedDate, 'day') ? "selected" : ""
                        }`}
                        key={day}
                        onClick={() => this.onDateClick(cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = moment(day).add(1, 'days');
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: moment(day).add(1, 'days')
        });
        console.log(moment(day).add(1, 'days').format('D'));
    };
    nextMonth = () => {
        this.setState({
            currentMonth: moment(this.state.currentMonth).add(1, 'months').format("YYYY-MM-DD")
        });
    };
    prevMonth = () => {
        this.setState({
            currentMonth: moment(this.state.currentMonth).subtract(1, 'months').format("YYYY-MM-DD")
        });
    };
    render() {
        var imgUrl="https://iamsainikhil.com/weather-react/weather-backgrounds/cloudy-day.jpg";
        var divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: "cover"
        }
        return (
            <div className="main-container">
                <div className="sidenav box-radius">
                    <h2 className="titular cursor">MENU</h2>
                    <ul className="header-menu horizontal-list">
                        <ListItem className="side-button" button>
                            <HomeIcon className="icon-button"/><p className="title-menu">Home</p>
                        </ListItem>
                        <a href='#calendar'>
                            <ListItem className="side-button" button>
                                <EventIcon className="icon-button"/><p className="title-menu">Calendar</p>
                            </ListItem>
                        </a>
                        <a href='#news'>
                        <ListItem className="side-button" button>
                            <MenuBookIcon className="icon-button"/><p className="title-menu">News</p>
                        </ListItem>
                        </a>
                        <ListItem className="side-button" button>
                            <SettingsApplicationsIcon className="icon-button"/><p className="title-menu">Settings</p>
                        </ListItem>
                        <ListItem className="side-button" button>
                            <ContactSupportIcon className="icon-button"/><p className="title-menu">Tutorials</p>
                        </ListItem>
                    </ul>
                </div>
                <div className="small-calendar box-radius">
                    <div className="sidenav box-radius">
                        <h2 className="titular cursor">{moment(this.state.currentMonth).format('dddd')}</h2>
                    </div>
                    <div className="small-header-cal-date cursor">
                        {moment(this.state.currentMonth).format('DD')}
                    </div>
                    <div className="small-header-cal-eventlist">
                        <p className="title-listevent cursor">Curent Event:</p>
                        <ol className="color-with-svg">
                            <li>There are no scheduled events today</li>
                        </ol>
                    </div>
                    <div className="small-header-cal-eventadd">
                        <ListItem className="side-button" button>
                            <p className="title-menu add-func-event"><>Create an Event</> <AddCircleIcon style={{marginLeft: "3%"}} /></p>
                        </ListItem>
                    </div>
                </div>
                <div className="weather box-radius" style={divStyle}>
                  {this.getWeather()}
                    <div className="flex-weather">
                        <div className="flex-2side">
                            <div className="parameter">
                                <div className="city-info">
                                    <p className="cityinf1 cursor">Dubna, Moscow region, Russia</p>
                                    <p className="cityinf2 cursor">{moment().format("MMMM Do YYYY | HH:mm")} <QueryBuilderIcon style={{ fontSize: "1em", marginLeft: "0.2em"}}/></p>
                                </div>
                                <div className="info-deg">
                                    <div className="cloudicon">
                                        tezt
                                    </div> 
                                    <div className="temp">
                                    {this.state.weather.temp}&deg;C
                                    </div>
                                </div>
                            </div>
                            <div className="degree-icon">
                                <div>
                                </div>
                                <div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-2day">
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cloud-service box-radius">
                cloud-service
                </div>
                <div className="chart-state box-radius">
                chart-state
                </div>
                <div className="room-event box-radius">
                room-event
                </div>
                <ScrollableAnchor id={'calendar'}>
                <div className="calendar box-radius-top">
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}                
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'news'}>
                <div className="news box-radius">
                news
                </div>
                </ScrollableAnchor>
            </div>
        )
    }
}