import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import AllTasks from "./pages/AllTasks";
import NavBar from "./layouts/NavBar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
