import React from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetch } from './../../hooks/useFetch';

export default function Home() {

  const {data : posts,error,isPending} = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (<div className="container">
    {
      posts && posts.map((post) => {
        return <Post post={post} key={post.id}/>
      })
    }
    {
      error && <p>{error}</p>
    }
    {
      isPending && <h3>Loading...</h3>
    }

  </div>)
}
