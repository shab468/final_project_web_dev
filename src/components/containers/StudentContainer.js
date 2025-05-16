import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk } from "../../store/thunks";
import StudentView from "../views/StudentView";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleDelete = async (studentId) => {
    await this.props.deleteStudent(studentId);
    this.props.history.push("/students");
  };

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

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);