/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, handleDelete } = props;

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{student.firstname} {student.lastname}</h1>
      
      {student.email && <p>Email: {student.email}</p>}
      {student.gpa !== null && <p>GPA: {student.gpa}</p>}
      {student.imageUrl && <img src={student.imageUrl} alt="student" width="150" />}

      <p>
        Campus: {
          student.campus ? (
            <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
          ) : (
            "Not enrolled in a campus"
          )
        }
      </p>

      <Link to={`/edit-student/${student.id}`}>
        <button>Edit Student</button>
      </Link>

      <button onClick={() => handleDelete(student.id)}>Delete Student</button>
    </div>
  );
};

export default StudentView;
