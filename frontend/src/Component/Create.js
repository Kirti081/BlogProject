import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData();
    formData.set("title", title);
    formData.set("summary", summary);
    formData.set("content", content);
    formData.set("file", file[0]);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }

    console.log(await response.json());
  }
  if (redirect) {
    return <Navigate to={"/blogPage"} />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="title"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        required
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></input>
      <input
        type="content"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
        required
        placeholder="Description"
      />
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files);
        }}
        required
        placeholder="Image"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default Create;
