import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterData, hideCompleted } from '../actions/filter';

class Actions extends Component {
  state = {
    text: '',
    hideCompleted: false
  }

  onChangeText = (e) => {
    this.setState({
      text: e.target.value
    }, () => {
      this.props.filterData(this.state.text)
    })
  }

  onChangeHideCompleted = (e) => {
    this.setState({
      hideCompleted: e.target.checked
    }, () => {
      this.props.hideCompleted(this.state.hideCompleted)
    })
  }

  render() {
    return (
      <div className="actions">
        <div className="actions__container">
          <input
            className="input"
            type="text"
            placeholder="Filter Task"
            value={this.state.text}
            onChange={this.onChangeText}
          />
          <label className="checkbox">
            <input
              type="checkbox"
              checked={this.state.hideCompleted}
              onChange={this.onChangeHideCompleted}
            /> Hide completed
        </label>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  filterData: text => dispatch(filterData(text)),
  hideCompleted: val => dispatch(hideCompleted(val))
})

export default connect(null, mapDispatchToProps)(Actions);