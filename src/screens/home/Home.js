import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
import Post from "../../components/post/Post";
export default function Home() {
 const {data:posts,error,isPending}=useFetch("https://jsonplaceholder.typicode.com/posts")
  return (<div className="container ">
    {
      posts && posts.map((post)=>{
        return <Post key={post.id} post={post}/>
      })
    }{
      error&&<h3>{error}</h3>
    }{
      isPending&&<h3>Loading...</h3>
    }
  </div>)
}
