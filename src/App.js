import { useState } from "react";
import "./components/pages/About.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
import BorrowerLoanInfo from "./components/dashboard/BorrowerLoanInfo";
import Dashboard from "./components/dashboard/Index.dashboard";
import Borrow from "./components/dashboard/Borrow.dashboard";
import History from "./components/dashboard/History";
import LoanApplication from "./components/dashboard/LoanApplication";
import AdminPage from "./components/pages/admin/AdminPage";
import AddAdmin from "./components/pages/admin/AddAdmin";
import Settings from "./components/dashboard/Settings";
import HelpSupport from "./components/dashboard/HelpSupport";
import Profile from "./components/pages/Profile";
// import Notification from "./components/pages/Notification";
import Security from "./components/pages/Security";
import DashCollaInfo from "./components/dashboard/DashCollaInfo";
import DashGInfo from "./components/dashboard/DashGInfo";
import LoansGenerated from "./components/dashboard/LoansGenerated";
import LoansDeclined from "./components/dashboard/LoansDeclined";
import LoansRefunded from "./components/dashboard/LoansRefunded";
import PendingLoans from "./components/dashboard/PendingLoans";
import BorrowerProfile from "./components/dashboard/BorrowerProfile";
import ErrorPage from "./components/pages/ErrorPage";
import PrivateRoute from "./components/pages/private.pages";
import ForgotPassword from "./components/pages/ForgotPassword";
import FullBProfile from "./components/dashboard/FullBProfile";
import EligibilityStatus from "./components/dashboard/EligibilityStatus";
import StatusSender from "./components/dashboard/StatusSender";
import SuccessStatus from "./components/dashboard/SuccessStatus";

function App() {
  const [auth, setAuth] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/login"
          element={<LogIn auth={auth} setAuth={setAuth} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard/settings/security/forgot_password"
          element={<ForgotPassword />}
        />
        <Route path="/" element={<Header auth={auth} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <PrivateRoute auth={auth}>
              <DashBoardContainer setAuth={setAuth} auth={auth} />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="loan" element={<LoanApplication />} />
          <Route path="history" element={<History />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="add_admin" element={<AddAdmin />} />

          <Route path="borrowerloan_info" element={<BorrowerLoanInfo />} />
          <Route path="collateral_info" element={<DashCollaInfo />} />
          <Route path="guarantor_info" element={<DashGInfo />} />
          <Route path="loansgenerated" element={<LoansGenerated />} />
          <Route path="loansdeclined" element={<LoansDeclined />} />
          <Route path="loansrefunded" element={<LoansRefunded />} />
          <Route path="pendingloans" element={<PendingLoans />} />
          <Route
            path="borrowerprofile/:fullname"
            element={<BorrowerProfile />}
          />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Profile />} />
            {/* <Route path="notification" element={<Notification />} /> */}
            <Route path="security" element={<Security />} />
          </Route>
          <Route path="fullbprofile" element={<FullBProfile />} />
          <Route path="eligibilitystatus" element={<EligibilityStatus />} />
          <Route path="eligibilitystatus_success" element={<SuccessStatus />} />
          <Route path="statussender" element={<StatusSender />} />
          <Route path="help" element={<HelpSupport />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;