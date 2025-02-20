import React from "react";

function Comment( { user, comment }) {
  
  return (
    <div className="App">
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;