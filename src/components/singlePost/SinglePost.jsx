import React, { useState } from "react";
import "./singlePost.style.css";
import { v4 as uuidv4 } from "uuid";

const defaultData2 = {
  id: "",
  title: "",
  body: "",
};

const postUrl = "https://jsonplaceholder.typicode.com/posts";

const SinglePost = ({ posts }) => {
  const [singlePost, setSinglePost] = useState(defaultData2);
  const [allPosts, setAllPosts] = useState(posts);

  const writePosts = async () => {
    try {
      const response = await fetch(postUrl, {
        method: "Post",
        body: JSON.stringify(singlePost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      setAllPosts([data, ...allPosts]);
      console.log(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const onChangeHandler = (e) => {
    setSinglePost({
      ...singlePost,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  return (
    <div>
      <form className="singlePost-form">
        <input name="title" type="text" onChange={onChangeHandler} />
        <textarea name="body" cols="30" rows="5"></textarea>

        <button onClick={() => writePosts()}>Post</button>
      </form>
    </div>
  );
};

export default SinglePost;
