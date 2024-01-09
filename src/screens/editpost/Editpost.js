import React, { useState, useEffect } from "react";
import "./Editpost.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "./../../hooks/useFetch";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";

export default function Editpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validationError, setValidationError] = useState("");
  const [modifiedField,setModifiedField] = useState({})

  const navigate = useNavigate();

  const location = useLocation();

  const { state: post } = location;


  const { data, error, optionsData } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "PATCH"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setValidationError("Title should not be empty");
      return;
    }
    if (!content) {
      setValidationError("Content should not be empty");
      return;
    }
    setValidationError("");
    console.log(modifiedField);
    optionsData(modifiedField)
  };

  useEffect(() => {
    setTitle(post.title)
    setContent(post.body)
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate,post.title,post.body]);


  const onTitleChange = (e) => {
    setTitle(e.target.value)
    setModifiedField({...modifiedField,title:e.target.value})
  }

  const onContentChange = (e) => {
    setContent(e.target.value)
    setModifiedField({...modifiedField,body:e.target.value})

  }

  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h6>Title:</h6>
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea rows="5"
            className="form-control"
            value={content}
            onChange={onContentChange }
          />
        </div>
        {validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}
        {data.length !== 0 && (
          <div className="alert alert-success" role="alert">
            Post Edited Successfully!
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="float-end">
          <Appsubmitbutton title="Edit"/>
        </div>
      </form>
    </div>
  );
}
