/*==================================================
AllStudentsContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
==================================================*/
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {
  fetchAllStudentsThunk,
  deleteStudentThunk
} from '../../store/thunks';

import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    const { allStudents, deleteStudent } = this.props;

    if (!allStudents) {
      return (
        <div>
          <Header />
          <h2>Loading students...</h2>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <AllStudentsView
          students={allStudents}
          deleteStudent={deleteStudent}
        />
      </div>
    );
  }
}

// Connect state from Redux store
const mapState = (state) => {
  return {
    allStudents: state.allStudents
  };
};

// Connect thunk dispatchers
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

// Connect and export
export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));
