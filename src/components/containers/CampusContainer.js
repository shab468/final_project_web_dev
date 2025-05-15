/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCampusThunk,
  deleteCampusThunk,
  editStudentThunk
} from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDeleteCampus = async (campusId) => {
    await this.props.deleteCampus(campusId);
    this.props.history.push("/campuses");
  };

  handleRemoveStudent = async (studentId) => {
    const updatedStudent = { id: studentId, campusId: null };
    await this.props.editStudent(updatedStudent);
    // Re-fetch campus to update student list
    this.props.fetchCampus(this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <Header />
        <CampusView
          campus={this.props.campus}
          handleDeleteCampus={this.handleDeleteCampus}
          handleRemoveStudent={this.handleRemoveStudent}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);