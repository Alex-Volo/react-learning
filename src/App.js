import React, { useState } from "react";
import Like from "./components/Like";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ClassCounter from "./components/ClassCounter";
// import Post from "./components/Post/Post";
import PostList from "./components/Post/PostsList";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Пусть будет какой-нибудь текст" },
    { id: 2, title: "Javascript", body: "А здесь " },
    { id: 3, title: "Javascript", body: "Будет " },
    { id: 4, title: "Javascript", body: "Совсем другой" },
    { id: 5, title: "Javascript", body: "Новый текст" },
  ]);
  // let postsElements = posts.map((post) => <Post post={post} />);
  return (
    <div>
      Работает
      <Like />
      <Counter />
      <Input />
      <ClassCounter />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
