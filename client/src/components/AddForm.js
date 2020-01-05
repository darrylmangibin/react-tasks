import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions/tasks';

class AddForm extends Component {
  state = {
    title: '',
    completed: false
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: this.state.title,
      completed: this.state.completed
    }
    this.props.addData(newData);
    this.setState({
      title: ''
    })
  }
  render() {
    const { error } = this.props;
    return (
      <Fragment>
        <form
          onSubmit={this.onSubmit}
        >
          <input
            autoComplete="off"
            type="text"
            className="input"
            placeholder="Something"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <button className="button">Add Task</button>
        </form>
        {
          error && <p style={{ color: 'red', fontSize: '1.2rem' }}>{error.title}</p>
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addData: data => dispatch(addData(data))
})

const mapStateToProps = state => ({
  error: state.tasks.error
})

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);