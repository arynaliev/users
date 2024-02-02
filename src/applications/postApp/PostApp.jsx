import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const getUrl = "https://jsonplaceholder.typicode.com/users/1/posts";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const defaultData2 = {
  id: "",
  title: "",
  body: "",
};

const PostApp = () => {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState(defaultData2);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch(getUrl);
    const data = await response.json();
    //  console.log(data);
    setPosts(data);
  };

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
      setPosts([data, ...posts]);
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
      <form>
        <input name="title" type="text" onChange={onChangeHandler} />
        <textarea name="body" cols="30" rows="10"></textarea>

        <button onClick={() => writePosts()}>Post</button>
      </form>

      <div>
        {posts.map((el) => (
          <div>
            <h5>{el.title}</h5>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostApp;
