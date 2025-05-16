import React from "react";

const EditCampusView = ({
  campus,
  name,
  address,
  description,
  imageUrl,
  handleChange,
  handleSubmit,
  errors
}) => {
  return (
    <div>
      <h1>Edit Campus</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCampusView;
