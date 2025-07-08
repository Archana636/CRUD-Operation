//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import StudentTable from './StudentTable';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewDetails from './ViewDetails';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<StudentTable />} />
    <Route path="/student/create" element={<CreateStudent />} />
    <Route path="/student/edit/:studentid" element={<EditStudent />} />
    <Route path="/student/view/:studentid" element={<ViewDetails />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
