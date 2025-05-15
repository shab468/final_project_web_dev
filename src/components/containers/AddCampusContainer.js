import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";
import { AddCampusView } from "../views";
import Header from "./Header";

class AddCampusContainer extends Component {
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    const errors = {};
    if (!this.state.name.trim()) errors.name = "Name is required.";
    if (!this.state.address.trim()) errors.address = "Address is required.";
    return errors;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const newCampus = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl || undefined
    };

    const createdCampus = await this.props.addCampus(newCampus);
    this.setState({
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      errors: {}
    });

    this.props.history.push("/campuses");
  };

  render() {
    return (
      <div>
        <Header />
        <AddCampusView
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

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus))
  };
};

export default connect(null, mapDispatch)(AddCampusContainer);
