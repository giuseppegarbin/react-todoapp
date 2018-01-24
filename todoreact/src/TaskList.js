import React, { Component } from 'react';
import Task from './Task.js';

class TaskList extends Component {
    render() {
      return (
        <div>
            <Task time="12" period="AM" activity_title="Finish Tutorial Series" activity_description="#ReactForNewbies" />
            <Task time="9" period="AM" activity_title="Meeting with Team Leads" activity_description="New Project Kickoff" />
            <Task time="11" period="AM" activity_title="Call Mom" activity_description="Return her call before she kills me" />
            <Task time="3" period="PM" activity_title="Fix Wifey's website" activity_description="FB Ads Integration not working" />
            <Task time="6" period="PM" activity_title="Do DB Backups" activity_description="Related to upcoming server migration" />
        </div>
      );
    }
  }
  
  export default TaskList;