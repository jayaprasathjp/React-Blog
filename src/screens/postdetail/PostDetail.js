import React, { useEffect } from "react";
import "./Postdetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "./../../hooks/useFetch";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";

export default function Postdetail() {
  const location = useLocation();

  const { state: post } = location;

  const { data, error, optionsData } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "DELETE"
  );

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${post.id}`, { state: post });
  };

  const handleDelete = () => {
    optionsData();
  };

  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        {data.length !== 0 && (
          <div className="alert alert-success" role="alert">
            Post Deleted Successfully!
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="float-end">
          <Appsubmitbutton onClick={handleDelete} title="Delete" />
          <div className="float-end"></div>
          <Appsubmitbutton onClick={handleEdit} title="Edit" />
        </div>
      </div>
    </div>
  );
}
