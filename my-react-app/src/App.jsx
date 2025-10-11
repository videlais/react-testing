import Achievement from './StudentProfile/Achievement/index.jsx';
import './App.css';
import StudentProfile from './StudentProfile/';
import InstructorProfile from './InstructorProfile';
import StudentList from './InstructorProfile/StudentList';

function App() {
  return (
    <>
      <InstructorProfile />
      <StudentList />
    </>
    
  )
}

export default App;
