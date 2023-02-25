import React from "react";
import { Outlet } from "react-router-dom";

function BlogTemplate() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default BlogTemplate;
