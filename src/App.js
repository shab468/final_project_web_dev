import "./App.css";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  AddCampusContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/campuses" component={AllCampusesContainer} />
          <Route exact path="/add-campus" component={AddCampusContainer} />
          <Route exact path="/campus/:id" component={CampusContainer} />
          <Route exact path="/students" component={AllStudentsContainer} />
          <Route exact path="/newstudent" component={NewStudentContainer} />
          <Route exact path="/student/:id" component={StudentContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
