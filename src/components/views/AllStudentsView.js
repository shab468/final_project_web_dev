/*==================================================
AllStudentsView.js

Styled and safe component to display all students.
==================================================*/
import { Link } from "react-router-dom";

const AllStudentsView = ({ students, deleteStudent }) => {
  console.log("Students prop:", students); // debug log

  if (!students || students.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>There are no students.</h2>
        <Link to="/newstudent">
          <button style={buttonStyle}>Add New Student</button>
        </Link>
      </div>
    );
  }

  const handleDelete = (id, name) => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirm) {
      deleteStudent(id);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>All Students</h1>

      <div style={gridStyle}>
        {students.map((student) => {
          const fullName = `${student.firstname || ""} ${student.lastname || ""}`.trim();

          return (
            <div key={student.id} style={cardStyle}>
              <Link to={`/student/${student.id}`} style={linkStyle}>
                <h2>{fullName || "Unnamed Student"}</h2>
              </Link>
              <p style={{ color: '#666' }}>
                Campus ID: {student.campusId || 'N/A'}
              </p>
              <button
                onClick={() => handleDelete(student.id, fullName || "this student")}
                style={deleteStyle}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <br />
      <Link to="/newstudent">
        <button style={buttonStyle}>Add New Student</button>
      </Link>
    </div>
  );
};

// Styling objects
const cardStyle = {
  width: '260px',
  backgroundColor: '#f4f6fa',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
};

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px'
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

const deleteStyle = {
  backgroundColor: '#c62828',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#11153e'
};

export default AllStudentsView;
