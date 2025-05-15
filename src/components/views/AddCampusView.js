import React from "react";
import PropTypes from "prop-types";

export const AddCampusView = (props) => {
  const {
    name,
    address,
    description,
    imageUrl,
    errors,
    handleChange,
    handleSubmit
  } = props;

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Address: </label>
          <input name="address" value={address} onChange={handleChange} />
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>
        <div>
          <label>Description: </label>
          <textarea name="description" value={description} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL: </label>
          <input name="imageUrl" value={imageUrl} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

AddCampusView.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
