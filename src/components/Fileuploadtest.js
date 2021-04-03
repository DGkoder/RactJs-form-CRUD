import React, { useState } from "react";
import { storage, db } from "../Firebase";
import firebase from "firebase";


function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
//   const [progress, setProgress] = useState("");
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (error) => {
        if(error.message != null)
            console.log(error.message)
        else
            console.log('File upload succesfully')
      },
      () => {
        //completing the upload task
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post the url in the db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
          });
      }
    );
  };
  return (
    <div className="imageUpload mb-5">
      {/* <progress className="image__progress" value={progress} max="100" /> */}
      {/* <input
        type="text"
        placeholder="your caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      /> */}
      <form action="">
        <input type="file" onChange={handleChange} />
        <input type="submit" onClick={handleUpload} value="Upload" />
      </form>
      
    </div>
  );
}

export default ImageUpload;