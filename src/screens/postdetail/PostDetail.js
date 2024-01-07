import React from "react";
import "./PostDetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
export default function PostDetail() {

  const location = useLocation();
  const { state :post} = location;
  const navigate=useNavigate()
  const {data, error,optionData }=useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,"DELETE")

  const handleEdit=()=>{
    navigate(`/edit/${post.id}`,{state:post})
  }
  const handleDelete=()=>{
    optionData()
  }
  useEffect(()=>{
    if(data.length!==0){
      const timer=setTimeout(()=>navigate("/"),3000);
      return ()=>clearTimeout(timer)
    }
  },[data,navigate]);
  
  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        {
          data.length!==0 && <div className="alert alert-success" role="alert">
          Post Deleted Successfully!
        </div>
        }{
          error&&<div class="alert alert-danger" role="alert">
          {error}
        </div>
        }
        <div className="float-end">
          <button type="submit" className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <div className="float-end">
          <button type="submit" onClick={handleEdit} className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
