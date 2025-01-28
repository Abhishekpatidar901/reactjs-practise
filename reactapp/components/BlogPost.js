import React from "react";
import CardWrapper from "./CardWrapper";

const BlogPost =({title,content})=>{
    return (
   <CardWrapper>
    <h2>{title}</h2>
    <p>content</p>
   </CardWrapper>
    );
};

export default BlogPost;