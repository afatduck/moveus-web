import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { UserProvider } from "./context/profileContext";
import Welcome from "./pages/welcome";
import { ProtectedRoutes } from "./components/protectedRoutes";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {

  return ( 
  <UserProvider>
    <main>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Homepage/>}/>
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
