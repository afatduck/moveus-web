import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { UserProvider } from "./context/profileContext";
import Welcome from "./pages/welcome";
import { ProtectedRoutes } from "./components/routes/protectedRoutes";
import Login from "./pages/login";
import Register from "./pages/register";
import ProfileSetup from "./pages/profileSetup";
import { NavRoutes } from "./components/routes/navRoutes";
import Profile from "./pages/profile";
import Settings from "./pages/settings";

function App() {

  return ( 
  <UserProvider>
    <main>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<NavRoutes />}>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path="/profile-setup" element={<ProfileSetup/>} />
            <Route path="/settings" element={<Settings/>} />
          </Route>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </main>
  </UserProvider>
  )
}

export default App;
