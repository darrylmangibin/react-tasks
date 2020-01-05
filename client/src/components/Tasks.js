import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import List from './List';

class Tasks extends Component {
  render() {
    const { tasks, text, hideCompleted } = this.props;
    const incomplete = tasks.filter(task => !task.completed)
    return (
      <Fragment>
        <h2 className="list-title">
          You have {incomplete.length} Task{incomplete.length > 1 ? 's' : ''} left
        </h2>
        {
          tasks.length <= 0
            ? (
              <p className="empty-message">There are no tasks to show</p>
            )
            : tasks.map(task => {
              return (
                <List 
                  key={task._id}
                  task={task}
                />
              )
            }).filter(list => {
              const ft = list.props.task.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
              const hc = !list.props.task.completed || !hideCompleted
              return ft && hc
            })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  text: state.filter.text,
  hideCompleted: state.filter.hideCompleted
})

export default connect(mapStateToProps)(Tasks);