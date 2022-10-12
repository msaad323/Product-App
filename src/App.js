import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [keep, setKeep] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {setPosts(data)
      setKeep(data)
      });
  }, []);

  const handleChange = (event) => {
    setFilterText(event.target.value);
    if (event.target.value === ''){
      setPosts(keep)
    }
  };

  const applyFilter = (event) => {
    event.preventDefault();
    
    // if(event.target.value === ''){
    //  setPosts(prev => prev)
    // }

    setPosts((prev) => {
      return [
        ...posts.filter((post) => post.title.includes(filterText)),
      ];
    });
    
  };

  return (
    <div className="App">
      <form onSubmit={applyFilter}>
        <input
          onChange={handleChange}
          type="text"
          name=""
          placeholder="Enter filtered text"
        />
        <button type="submit">Filter Posts</button>
      </form>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
