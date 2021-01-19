import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Resources,
  Appointments,
  Toolbar,DayView,
  ViewSwitcher,
  DateNavigator,
  AppointmentTooltip,
  MonthView,
} from '@devexpress/dx-react-scheduler-material-ui';
import './css.css';
import API from '../../../../reducers/api';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Eventcal } from "../../functions/addevent/event"


export default class Calendar extends React.PureComponent {
   componentDidMount() {
    this.event();
  }
  
  async event() {
    await API.get("/api/get/calendarselect").then((resp) => {
      const pre =resp.data.map(n => ({
        title: n.event_name,
        startDate:n.event_start,
        endDate:n.event_end,
        location:n.room_name
      }) );
      this.setState((state) => ({ eventdata: pre }));
      
    });
    await API.get("/api/get/calendarselectroom").then((resp) => {
      this.setState(() => ({ room: resp.data }));
    })
  }
  componentWillUnmount() { this.setState = ()=>{ return; };}

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this)

    this.state = {
      eventdata: [],
      startDayHour: 8,
      endDayHour: 21,
      showModal: false,
      setShowModal: false,
      room:[]
    };
  }
  openModal() {
    this.setState(() => ({ setShowModal: !this.state.setShowModal }));
  }
  render() {
    const {startDayHour, endDayHour, eventdata } = this.state;
    const styles = theme => ({
      addButton: {
        position: 'absolute',
        bottom: theme.spacing(1) * 3,
        right: theme.spacing(1) * 4,
      },
    });
    const resources = [{
      fieldName: 'location',
      title: 'Location',
      instances: [
        { id: 'english room', text: 'Room 1', color: 'blue' },
        { id: 'Room 2', text: 'Room 2', color: 'blue' },
        { id: 'Room 3', text: 'Room 3', color: 'blue' },
      ],
    }];
    const setShowModal=this.state.setShowModal;
    const showModal=this.state.setShowModal;
    const room=this.state.room;
    return (
      <Paper style={{position:"relative !important"}}>
        <Scheduler
          data={eventdata}
          firstDayOfWeek={1}
        >
          <ViewState
            defaultCurrentDate={new Date()}
            onCurrentViewNameChange={this.currentViewNameChange}
          />
          <WeekView
            name="work-week"
            displayName="Week"
            startDayHour={startDayHour}
            endDayHour={endDayHour}
            excludedDays={[0, 8]}
          />
          <DayView
            displayName={'Three days'}
            startDayHour={startDayHour}
            endDayHour={endDayHour}
            intervalCount={3}
          />

          <MonthView />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />

          <Appointments />
          <AppointmentTooltip showCloseButton/>

        </Scheduler>
        <Eventcal room={room} close={this.openModal} showModal={showModal} setShowModal={setShowModal} />
        <Fab color="secondary" className="MuiFabbut" > <AddIcon onClick={this.openModal} /> </Fab>
      </Paper>
    );
  }
}
