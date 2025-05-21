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
import CreateEvent from "./pages/createEvent";
import EventPage from "./pages/eventPage";
import CreatePost from "./pages/createPost";
import UserPage from "./pages/userPage";

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
            <Route path="/create-event" element={<CreateEvent/>} />
          </Route>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/event/:eventId" element={<EventPage />} />
          <Route path="/create-post/:eventId" element={<CreatePost />}/>
          <Route path="/user/:userId" element={<UserPage />}/>
        </Routes>
      </Router>
    </main>
  </UserProvider>
  )
}

export default App;
