import React, { useState } from "react";
import Comment from "./Comment";

function CommentsSection( { comments }) {

  const commentsList = comments.map( comment => {
    return <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
  })
  
  const [toggle, setToggle] = useState(true)

  function handleToggle(){
    const newToggle = !toggle
    setToggle(newToggle)
  }

  return (
    <div className="App">
      <button type="button" onClick={()=>handleToggle()}> 
        {toggle ? "Hide Comments" : "Show Comments"} 
      </button>
      <h3>{comments.length} Comments</h3>
      <hr></hr>
      {toggle ? <section>{commentsList}</section> : null}
    </div>
  );
}

export default CommentsSection;