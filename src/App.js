import "./components/pages/About.css";
import "./components/dashboard/Dashboard.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/contatPage/Contact";

//  RootLayouts
import Header from "./components/layouts/Header";

// Buttons
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import DashBoardContainer from "./components/layouts/DashBoardContainer";
import Dashboard from "./components/dashboard/Index.dashboard";
import Borrow from "./components/dashboard/Borrow.dashboard";
import History from "./components/dashboard/History";
import LoanApplication from "./components/dashboard/LoanApplication";
import AdminPage from "./components/pages/admin/AdminPage";
import AddAdmin from "./components/pages/admin/AddAdmin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="dashboard" element={<DashBoardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="borrow" element={<Borrow />} />
        <Route path="loan_application" element={<LoanApplication />} />
        <Route path="history" element={<History />} />
        {/* <Route path="admin" element={<Admin />} />
          <Route path="settings" element={<Settings />} /> */}
        <Route path="admin" element={<AdminPage />} />
        <Route path="add_admin" element={<AddAdmin />} />
      </Route>
    </>
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
