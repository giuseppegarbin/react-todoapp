import React, { Component } from 'react';
import Task from './Task.js';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const TASK_QUERY = gql`
  query taskQuery {
    allTasks {
      id
      time
      title
      description
      status
    }
  }
`


class TaskList extends Component {
    render() {
      // Loading
      if (this.props.taskQuery && this.props.taskQuery.loading) {
        return <div>Loading</div>
      }
    
      // Error
      if (this.props.taskQuery && this.props.taskQuery.error) {
        return <div>Error</div>
      }
    
      // Correct
      const tasksToRender = this.props.taskQuery.allTasks
      console.log(tasksToRender)

      return (
        <div>
            {tasksToRender.map(task => 
              <Task
                key={task.id}
                id={task.id}
                time={task.time}
                title={task.title}
                description={task.description}/>
            )}
        </div>
      );
    }
  }
  
  export default graphql(TASK_QUERY, { name: 'taskQuery' }) (TaskList)