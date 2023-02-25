import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  const { pageId } = useParams();

  const [singlePost, setSinglePost] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + pageId
      );
      console.log(result)
      setSinglePost(result.data)
    }
    fetchData()
  }, []);
  //   console.log(pageId)

  return (
    <div className="singlePost">
        <h4>{singlePost.title}</h4>
        <p>{singlePost.body}</p>
    </div>
  );
}

export default BlogDetail;
