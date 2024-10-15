import React, { useContext, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
 
  if (!postInfo) return "";
  return (
    <div className="post-page">
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <h1 className="post-heading">{postInfo.title}</h1>
      {userInfo.id === postInfo.author._id && (
        <Link to={`/edit/${postInfo._id}`}>
          <button className="editButton">Edit</button>
        </Link>
      )}
      <div className="author-detail">
        <p className="author">by {postInfo.author.username}</p>
        <p className="created-date">{postInfo.createdAt}</p>
      </div>
      <p className="summary">
        <u>
          <i>{postInfo.summary}</i>
        </u>
      </p>
      <div className="post-content">{postInfo.content}</div>
    </div>
  );
};

export default PostPage;
