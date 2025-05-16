/*==================================================
NewStudentContainer.js

Manages form state and submission for creating a new student.
==================================================*/
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gpa: '',
      campusId: null,
      redirect: false,
      redirectId: null
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { firstname, lastname, email, gpa, campusId } = this.state;

    // Basic validation
    if (!firstname.trim() || !lastname.trim() || !email.trim()) {
      alert("First name, last name, and email are required.");
      return;
    }

    const student = {
      firstname,
      lastname,
      email,
      gpa: gpa || null,
      campusId: campusId ? Number(campusId) : null
    };

    try {
      const newStudent = await this.props.addStudent(student);
      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        gpa: '',
        campusId: null,
        redirect: true,
        redirectId: newStudent.id
      });
    } catch (error) {
      console.error("Student creation failed or no ID returned:", error);
      alert("Failed to create student. Please check your input or try again.");
    }
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(NewStudentContainer);
