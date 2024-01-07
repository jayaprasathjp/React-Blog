import { useState, useEffect } from "react";
// "https://jsonplaceholder.typicode.com/posts"
export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [option, setOption] = useState(null);

  const optionData = (data) => {
    if (method === "POST") {
      setOption({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
    else if(method==="PATCH"){
        setOption({
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
    }
    else if(method==="DELETE"){
        setOption({
            method: "DELETE"
          });
    }
  };
  useEffect(() => {
    const fetchPosts = async (option) => {
      setIsPending(true);
      const response = await fetch(url,{...option});
      const jsonResponse = await response.json();
      if (response.ok) {
        setData(jsonResponse);
        setError("");
        setIsPending(false);
      }
      if (!response.ok) {
        setError(jsonResponse.error);
        setIsPending(false);
      }
    };
    if(method==="GET"){
        fetchPosts();
    }
    else if((method==="POST" || method==="PATCH"|| method==="DELETE") &&option){
        fetchPosts(option)
    }
    
  }, [url,method,option]);
  return { data, error, isPending,optionData };
};
