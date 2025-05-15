import axios from "axios";
import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All Campuses
export const fetchAllCampuses = (campuses) => {
  return {
    type: at.FETCH_ALL_CAMPUSES,
    payload: campuses,
  };
};

// Add Campus
export const addCampus = (campus) => {
  return {
    type: at.ADD_CAMPUS,
    payload: campus,
  };
};

// Delete Campus
export const deleteCampus = (campusId) => {
  return {
    type: at.DELETE_CAMPUS,
    payload: campusId,
  };
};

// Update Campus
export const updateCampus = (campus) => {
  return {
    type: at.UPDATE_CAMPUS,
    payload: campus,
  };
};

//Single Campus
export const fetchCampus = (campus) => {
  return {
    type: at.FETCH_CAMPUS,
    payload: campus,
  };
};

//All Students
export const fetchAllStudents = (students) => {
  return {
    type: at.FETCH_ALL_STUDENTS,
    payload: students,
  };
};

export const addStudent = (student) => {
  return {
    type: at.ADD_STUDENT,
    payload: student,
  };
};

export const deleteStudent = (studentId) => {
  return {
    type: at.DELETE_STUDENT,
    payload: studentId,
  };
};


export const editStudent = (student) => {
  return {
    type: at.EDIT_STUDENT,
    payload: student,
  };
};

//Single Student
export const fetchStudent = (student) => {
  return {
    type: at.FETCH_STUDENT,
    payload: student,
  };
};

// Thunk: Fetch all campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/campuses");
    dispatch(fetchAllCampuses(data));
  } catch (err) {
    console.error(err);
  }
};

// Thunk: Add campus
export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/campuses", campus);
    dispatch(addCampus(data));
  } catch (err) {
    console.error(err);
  }
};

// Thunk: Delete campus
export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(deleteCampus(campusId));
  } catch (err) {
    console.error(err);
  }
};

// Thunk: Update campus
export const updateCampusThunk = (campus) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(updateCampus(data));
  } catch (err) {
    console.error(err);
  }
};