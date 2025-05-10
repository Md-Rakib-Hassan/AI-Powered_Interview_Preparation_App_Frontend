import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Home/Dashboard';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';

const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/interview-prep/:sessionId' element={<InterviewPrep></InterviewPrep>}></Route>
        </Routes>
      </Router>

      <Toaster
        toastOptions={
          {
            className: "",
            style: {
              fontSize:"14px",
            }
          }
      }
      ></Toaster>
    </div>
  );
};

export default App;