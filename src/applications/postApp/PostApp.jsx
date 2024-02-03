import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SinglePost from "../../components/singlePost/SinglePost";

const getUrl = "https://jsonplaceholder.typicode.com/users/1/posts";

const PostApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch(getUrl);
    const data = await response.json();
    //  console.log(data);
    setPosts(data);
  };

  //   const updatePosts = () => {
  //     setPosts([data, posts]);
  //   };

  return (
    <div>
      <div className="posts">
        {posts.map((el, index) => (
          <div key={index}>
            <h5>{el.title}</h5>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
      <SinglePost posts={posts} />
    </div>
  );
};

export default PostApp;
