import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/tasks';

import List from './List';

class Tasks extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    return (
      <Fragment>
        <h2 className="list-title">You have 0 Task left</h2>
        <p className="empty-message">There are no tasks to show</p>
        <List />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(null, mapDispatchToProps)(Tasks);