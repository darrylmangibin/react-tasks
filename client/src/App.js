import React, { Fragment, Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getData } from './actions/tasks';

import Header from './components/Header';
import Actions from './components/Actions';
import Tasks from './components/Tasks';
import AddForm from './components/AddForm';

class App extends Component {
  componentDidMount(){
    this.props.getData();
  }
  renderLoading = () => {
    return (
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p>Loading...</p>
      </div>
    )
  }
  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <Header />
        <Actions />
        {
          loading
            ? this.renderLoading()
            : (
              <div className="container">
                <Tasks />
                <AddForm />
              </div>
            )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.tasks.loading
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
