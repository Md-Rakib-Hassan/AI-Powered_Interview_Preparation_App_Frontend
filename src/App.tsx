import { Outlet} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
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