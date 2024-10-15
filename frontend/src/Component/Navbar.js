import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     credentials: "include",
  //   }).then((response) => {
  //     response.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  // }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;

  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <Link to="/blogpage" className="logo">
            <h1>MyBlog</h1>
          </Link>
          <nav className="nav">
            {username && (
              <div>
                <Link to="/create">
                  <h3>Create new post</h3>
                </Link>
                <Link onClick={logout} to={"/login"}>
                  <h3>Logout</h3>
                </Link>
              </div>
            )}

            {!username && (
              <div>
                <Link to="/login">
                  <h3>Login</h3>
                </Link>
                <Link to="/register">
                  <h3>Register</h3>
                </Link>
              </div>
            )}
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
}
