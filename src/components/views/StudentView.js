/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = ({ student, handleDelete }) => {
  if (!student) return <p>Loading...</p>;

  const fullName = student.firstname + " " + student.lastname;

  return (
    <div>
      <h1>{fullName}</h1>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      <img src={student.imageUrl} alt="student" width="150" />
      <p>
        Campus: {student.campus ? (
          <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
        ) : (
          "Not enrolled"
        )}
      </p>
      <Link to={`/edit-student/${student.id}`}><button>Edit Student</button></Link>
      <button onClick={() => handleDelete(student.id)}>Delete Student</button>
    </div>
  );
};

export default StudentView;