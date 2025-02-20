import React, { useState } from "react";
import video from "../data/video.js";

import VideoComponent from "./VideoComponent.js";
import LikeButtons from "./LikeButtons.js";
import CommentsSection from "./CommentsSection.js";

function App() {
  console.log("Here's your data:", video);

  const [likesObject, setLikesObject] = 
  useState({likes: video.upvotes, dislikes: video.downvotes})

  function handleLikes(previousLikes, id){
    let newLikesObject
    if(id == "likes"){
      newLikesObject = {... likesObject, likes: parseInt(previousLikes) + 1}
    }else if(id =="dislikes"){
      newLikesObject = {... likesObject, dislikes: parseInt(previousLikes) - 1}
    }
    setLikesObject(newLikesObject)
  }

  return (
    <div className="App">
      <VideoComponent video={video} />
      <br></br>
      <LikeButtons likesObject={likesObject} onHandleLikes={handleLikes}/>
      <br></br>
      <CommentsSection comments={video.comments} />
    </div>
  );
}

export default App;
