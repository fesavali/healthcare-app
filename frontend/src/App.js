import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Home2 from "./pages/Home";
import ServiceDetail from './components/ServiceDetail';
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Notifications from "./pages/Notifications";
import Userslist from "./pages/Admin/UsersList";
import DoctorsList from "./pages/Admin/DoctorsList";
import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div className="App">
        <Router>
        {loading && (
            <div className="spinner-parent">
            <div class="spinner-border" role="status"></div>
            </div>
          )}
          <Toaster position="top-center" reverseOrder={false} />
        <Header/>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute> } />
            <Route path="/register" element={ <PublicRoute> <Register /> </PublicRoute> } />
            <Route path="/dash" element={ <ProtectedRoute> <Home2 /> </ProtectedRoute> } />
            <Route path="/apply-doctor" element={ <ProtectedRoute> <ApplyDoctor /> </ProtectedRoute> } />
            <Route path="/notifications" element={ <ProtectedRoute> <Notifications /> </ProtectedRoute> } />
            <Route path="/admin/userslist" element={ <ProtectedRoute> <Userslist /> </ProtectedRoute> } />
            <Route path="/admin/doctorslist" element={ <ProtectedRoute> <DoctorsList /> </ProtectedRoute> } />
            <Route path="/doctor/profile/:userId" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } />
            <Route path="/book-appointment/:doctorId" element={ <ProtectedRoute> <BookAppointment /> </ProtectedRoute> } />
            <Route path="/appointments" element={ <ProtectedRoute> <Appointments /> </ProtectedRoute> } />
            <Route path="/doctor/appointments" element={ <ProtectedRoute> <DoctorAppointments /> </ProtectedRoute> } />
          </Routes>
      </Router>
      <Footer />
    </div>


  );
}

export default App;
