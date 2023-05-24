import logo from "./logo.svg";
import "./App.css";
import './components/pages/About.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

//  RootLayouts
import Header from "./components/layouts/Header";

// Buttons
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import DashBoardContainer from "./components/layouts/DashBoardContainer";
import Dashboard from "./components/dashboard/Dashboard";
import Borrow from "./components/dashboard/Borrow.dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<DashBoardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="borrow" element={<Borrow />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
