import react from "react";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <div className="post">
      <div className="main-post">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} />
        </Link>
      </div>
      <div className="right-post">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <div className="author-detail">
          <p className="author">{author.username}</p>
          <p className="created-date">{createdAt}</p>
        </div>
        <p className="summary"
        ><i>{summary}</i></p>
      </div>
    </div>
  );
};

export default Post;
// <Link to={`/post/${_id}`}>
// <div>{title}</div>
// <div> {summary}</div>
// <div> {cover}</div>
// <div>{content}</div>
// <div>{createdAt}</div>
// <div>{author.username}</div>
// </Link>
