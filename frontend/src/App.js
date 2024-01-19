import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard';
import AddNote from './Component/AddNote';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: '/AddNote',
      element: <AddNote />
    },
    {
      path: '/AddNote/:id',
      element: <AddNote />
    }
  ])

  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
