/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

const CampusView = (props) => {
  const { campus, handleDeleteCampus, handleRemoveStudent } = props;

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>

      <img src={campus.imageUrl} alt={campus.name} width="300" />

      <br /><br />

      {/* Edit + Delete buttons */}
      <Link to={`/edit-campus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
      <button onClick={() => handleDeleteCampus(campus.id)}>Delete Campus</button>

      <br /><br />

      {/* Add New Student */}
      <Link to="/newstudent">
        <button>Add New Student</button>
      </Link>

      <h2>Enrolled Students:</h2>

      {campus.students.length ? (
        campus.students.map((student) => (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h3>{student.firstname} {student.lastname}</h3>
            </Link>
            <button onClick={() => handleRemoveStudent(student.id)}>Remove from Campus</button>
            <hr />
          </div>
        ))
      ) : (
        <p>No students are currently enrolled at this campus.</p>
      )}
    </div>
  );
};

export default CampusView;
