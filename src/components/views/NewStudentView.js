/*==================================================
NewStudentView.js

Displays the New Student form.
==================================================*/
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>New Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
              Add a Student
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <label>First Name: </label>
            <input type="text" name="firstname" onChange={handleChange} required />
            <br /><br />

            <label>Last Name: </label>
            <input type="text" name="lastname" onChange={handleChange} required />
            <br /><br />

            <label>Email: </label>
            <input type="email" name="email" onChange={handleChange} required />
            <br /><br />

            <label>GPA: </label>
            <input type="text" name="gpa" onChange={handleChange} />
            <br /><br />

            <label>Campus ID: </label>
            <input type="text" name="campusId" onChange={handleChange} />
            <br /><br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br /><br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStudentView;