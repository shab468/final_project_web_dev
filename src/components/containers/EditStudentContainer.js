import Header from './Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';
import EditStudentView from '../views/EditStudentView';

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null,
    };
  }

  async componentDidMount() {
    const studentId = this.props.match.params.id;
    await this.props.fetchStudent(studentId);
    this.setState({ student: { ...this.props.student } });
  }

  handleChange = (event) => {
    this.setState({
      student: {
        ...this.state.student,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { student } = this.state;
    await this.props.editStudent(student);
    this.props.history.push(`/student/${student.id}`);
  };

  render() {
    return (
      <div>
        <Header />
        <EditStudentView
          student={this.state.student}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student))
});

export default connect(mapState, mapDispatch)(EditStudentContainer);
