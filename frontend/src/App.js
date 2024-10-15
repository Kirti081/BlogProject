// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Component/Register";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Blogpage from "./Component/Blogpage";
import { UserContextProvider } from "./Component/UserContext";
import Create from "./Component/Create";
import PostPage from "./Component/PostPage";
import Editpost from "./Component/Editpost";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Login/>} />
            <Route path="blogPage" element={<Blogpage />} />
            <Route path="create" element={<Create/>}/>
            <Route path="post/:id" element={<PostPage/>}/>
            <Route path="edit/:id" element={<Editpost/>}/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
