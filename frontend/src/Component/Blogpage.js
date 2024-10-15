import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Blogpage = () => {
  const navigate = useNavigate()
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      }).catch((err)=>{
        console.log("err",err);
        navigate('/');
      });
    });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {     
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
    {userInfo?.username && posts.length>0&&
       posts.map(post=>(<Post {...post}/>))}
    </>
  );
};

export default Blogpage;
