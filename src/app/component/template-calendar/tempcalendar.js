import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  AppointmentTooltip,
  MonthView,
} from '@devexpress/dx-react-scheduler-material-ui';
import './css.css';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: 'Website Re-Design Plan',
          startDate: new Date(2020, 10, 10, 9, 30),
          endDate: new Date(2020, 10, 10, 11, 0),
        }, {
          title: 'Book Flights to San Fran for Sales Trip',
          startDate: new Date(2020, 10, 10, 9, 30),
          endDate: new Date(2020, 10, 10, 11, 0),
        }, {
          title: 'Install New Router in Dev Room',
          startDate: new Date(2020, 10, 10, 9, 30),
          endDate: new Date(2020, 10, 10, 11, 0),
        }, {
          title: 'Approve Personal Computer Upgrade Plan',
          startDate: new Date(2020, 10, 10, 9, 30),
          endDate: new Date(2020, 10, 10, 11, 0),
        }]
    };
  }
  render() {
    const { data } = this.state;
    return (
      <Paper>
        <Scheduler
          data={data}
          height={720}
          firstDayOfWeek={1}
        >
          <ViewState
            defaultCurrentDate={new Date()}
            onCurrentViewNameChange={this.currentViewNameChange}
          />
                    <MonthView />
          <WeekView
            name="work-week"
            displayName="Week"
            excludedDays={[0, 6]}
          />

          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip 
          showCloseButton
          />
        </Scheduler>
      </Paper>
    );
  }
}
