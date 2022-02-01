import React from "react";
const styles = require("./create.css").default;


// We are sendin our request to backend with this form and catch with req.body
function CreateButterfly() {
  return (
    <div className={styles.form}>
<h1 className={styles.header}>Add Butterfly</h1>
    <form method="POST" action="http://localhost:8000/create">
      <input type="text" placeholder="Name" name="name" />
      <input type="text" name="species" placeholder="Species" />
      <input type="text" name="link" placeholder="Link" />
      <input type="text" name="image_url" placeholder="Image Url" />

      <input className={styles.submit} type="submit" />
    </form>
    </div>
  );
}

export default CreateButterfly;
