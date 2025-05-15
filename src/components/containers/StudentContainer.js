/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  // Get student data from back-end database
  componentDidMount() {
    // Get student ID from URL
    this.props.fetchStudent(this.props.match.params.id);
  }

  // Handle deletion and redirect
  handleDelete = async (studentId) => {
    await this.props.deleteStudent(studentId);
    this.props.history.push("/students");
  };

  // Render Student view by passing student data and delete handler as props
  render() {
    return (
      <div>
        <Header />
        <StudentView
          student={this.props.student}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

// Connect component to Redux store
const mapState = (state) => {
  return {
    student: state.student, // Get student from reducer
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)), // ✅ Added deleteStudentThunk
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
