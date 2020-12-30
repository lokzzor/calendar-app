import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,DayView,
  ViewSwitcher,
  DateNavigator,
  AppointmentTooltip,
  MonthView,
} from '@devexpress/dx-react-scheduler-material-ui';
import './css.css';
import axios from "axios";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


export default class Calendar extends React.PureComponent {
   componentDidMount() {
    this.event();
  }
  async event() {
    await axios.get("/api/get/calendarselect").then((resp) => {
      //console.log(resp.data);
      const pre =resp.data.map(n => ({
        title: n.event_name,
        startDate:n.event_start,
        endDate:n.event_end
        
      }) );
      this.setState((state) => ({ eventdata: pre }));
    });
  }
  
  constructor(props) {
    super(props);

    this.state = {
      eventdata: [],
      startDayHour: 9,
      endDayHour: 19,
    };
  }
  render() {
    const {
      startDayHour,
      endDayHour,
      eventdata
    } = this.state;
    //console.log(moment(n.first_data.data).format('YYYY-MMMM-DDDD'))

    return (
      <Paper>
        <Scheduler
          data={eventdata}
          firstDayOfWeek={1}
        >
          <ViewState
            defaultCurrentDate={new Date()}
            onCurrentViewNameChange={this.currentViewNameChange}
          />
          <DayView
            displayName={'Three days'}
            startDayHour={startDayHour}
            endDayHour={endDayHour}
            intervalCount={3}
          />
          <WeekView
            name="work-week"
            displayName="Week"
            startDayHour={startDayHour}
            endDayHour={endDayHour}
            excludedDays={[0, 6]}
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip showCloseButton/>
          <Fab
            color="secondary"
            className="MuiFabbut"
            >
            <AddIcon />
          </Fab>
        </Scheduler>
      </Paper>
    );
  }
}
