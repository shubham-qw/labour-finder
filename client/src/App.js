import Navbar from "./components/navbar";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User  from "./pages/User";
import Labour from "./pages/registerLabour";
import LabourCard from "./pages/labour";
import Home from "./pages/home";
const router = createBrowserRouter([
  {
    path: "/user",
    element:<User/>,
  },
  {
    path : "/labour",
    element: <Labour/>
  },
  {
    path : "/card",
    element : <LabourCard/>
  },
  {
    path : "/",
    element : <Home/>
  }
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
