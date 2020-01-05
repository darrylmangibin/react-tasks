import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeData, editData } from '../actions/tasks';

class List extends Component {
  state = {
    completed: false
  }

  onChangeCompleted = (e) => {
    this.setState({
      completed: e.target.checked
    })
  }

  UNSAFE_componentWillMount(){
    this.setState({
      completed: this.props.task.completed
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.completed !== this.state.completed) {
      this.props.editData(this.props.task._id, this.state)
    }
  }

  render() {
    const { task, removeData } = this.props;
    return (
      <label className="list-item">
        <div className="list-item__container">
          <input
            type="checkbox"
            checked={this.state.completed}
            onChange={this.onChangeCompleted}
          />
          <span>{task.title}</span>
        </div>
        <button className="button button--text"
          onClick={() => removeData(task._id)}
        >remove</button>
      </label>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeData: id => dispatch(removeData(id)),
  editData: (id, newData) => dispatch(editData(id, newData))
})

export default connect(null, mapDispatchToProps)(List);