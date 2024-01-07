import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home"; 
import PostDetail from "./screens/postdetail/PostDetail";
import CreatePost from "./screens/create/CreatePost";
import EditPost from "./screens/edit/EditPost";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail/>}/>
          <Route path="/edit/:id" element={<EditPost/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
