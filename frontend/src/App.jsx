import { Route, Routes } from "react-router"
import { Toaster, toast } from "react-hot-toast"

import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import NotificationsPage from "./pages/NotificationsPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"

const App = () => {
  return (
    <div className="h-screen" data-theme="night">
      <button onClick={() => { toast.success("hello world") }}>Create a Toast</button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/notifications" element={<NotificationsPage />}></Route>
        <Route path="/call" element={<CallPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/onboard" element={<OnboardingPage />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
