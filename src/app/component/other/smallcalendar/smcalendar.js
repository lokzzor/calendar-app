import React, { Component } from 'react'
import './smcalendar.css';

import moment from "moment";
import ListItem from "@material-ui/core/ListItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Eventcal } from "../../functions/addevent/event.js"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import API from '../../../../reducers/api';


export default class Smcalendar extends Component {
    async componentDidMount() {
        
        await API.get("/api/get/calendarselectroom").then((resp) => {
            this.setState(() => ({ room: resp.data }));
        })

        await API.get("/api/get/scalendarselect").then((resp) => {
            if(resp.data.length === 0){
                const pre =<li className="listli"  key='1'><DonutLargeIcon className="colorcircle"/><span className="titleevent">There are no scheduled events today</span></li>;
                this.setState(() => ({ eventdata: pre }));
            } else{
                const pre2 =resp.data.slice(0, 3).map(n => {
                    return <li className="listli" key={n.event_id} ><DonutLargeIcon className="colorcircle"/><span className="titleevent">{n.event_name}</span></li>    
                    });
                    this.setState(() => ({ eventdata: pre2 }));
            }
        });
    }
    componentWillUnmount() { this.setState = ()=>{ return; };}
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this)

        this.state = {
          eventdata:'--Loading--',
          showModal: false,
          setShowModal: false,
          room:[]
        };
      }
      openModal() {
        this.setState(() => ({ setShowModal: !this.state.setShowModal }));
    }
    render() { 
        const setShowModal=this.state.setShowModal;
        const showModal=this.state.setShowModal;
        const room=this.state.room;

        return (
            <>
                <div className="sidenav box-radius">
                    <h2 className="titular cursor side">
                        {moment(new Date()).format("dddd")}
                    </h2>
                </div>
                <div className="small-header-cal-date cursor">
                    {moment(new Date()).format("DD")}
                </div>
                <div className="small-header-cal-eventlist">
                <span className="layer cursor">Curent Event:</span>
                    <ol className="color-with-svg">
                        {this.state.eventdata}
                    </ol>
                </div>
                <div className="small-header-cal-eventadd">
                    <Eventcal room={room} close={this.openModal} showModal={showModal} setShowModal={setShowModal} />
                    <ListItem onClick={this.openModal} className="side-button" button>
                        <p className="title-menu add-func-event">
                            <>Create an Event</>{" "}
                            <AddCircleIcon style={{ marginLeft: "3%" }} />
                        </p>
                    </ListItem>
                </div>
            </>
        )
    }
}