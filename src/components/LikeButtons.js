import React from "react";

function LikeButtons( { likesObject, onHandleLikes }) {
  
  return (
    <div className="App">
      <button id="likes" type="button" onClick={(e) => onHandleLikes(e.target.textContent, e.target.id)}>
        {likesObject.likes}👍
    </button>
      <button id="dislikes" type="button" onClick={(e) => onHandleLikes(e.target.textContent, e.target.id)}>
        {likesObject.dislikes}👎
    </button>
    </div>
  );
}

export default LikeButtons;