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
import ChatPage from "./pages/chatPage";
import HeaderRoutes from "./components/routes/headerRoutes";
import UserChat from "./pages/userChat";
import Notifications from "./pages/notifications";
import SearchPage from "./pages/search";
import FeedPage from "./pages/feedPage";

function App() {

  return ( 
  <UserProvider>
    <main>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<NavRoutes />}>
              <Route element={<HeaderRoutes/>}>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/chat" element={<ChatPage/>} />
                <Route path="/feed" element={<FeedPage/>} />
              </Route>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path="/profile-setup" element={<ProfileSetup/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/create-event" element={<CreateEvent/>} />
            <Route path="/chat/:userId" element={<UserChat />} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/search" element={<SearchPage/>} />
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
