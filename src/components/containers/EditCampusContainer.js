import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, updateCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
import Header from "./Header";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      errors: {}
    };
  }

  async componentDidMount() {
    const campusId = this.props.match.params.id;
    await this.props.fetchCampus(campusId);
    const { name, address, description, imageUrl } = this.props.campus;
    this.setState({ name, address, description, imageUrl });
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  validate = () => {
    const errors = {};
    if (!this.state.name.trim()) errors.name = "Name is required.";
    if (!this.state.address.trim()) errors.address = "Address is required.";
    return errors;
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const updatedCampus = {
      id: this.props.match.params.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    };

    await this.props.updateCampus(updatedCampus);
    this.props.history.push(`/campus/${updatedCampus.id}`);
  };

  render() {
    return (
      <div>
        <Header />
        <EditCampusView
          campus={this.props.campus}
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
          imageUrl={this.state.imageUrl}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  updateCampus: (campus) => dispatch(updateCampusThunk(campus))
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
