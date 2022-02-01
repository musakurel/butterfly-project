import React from "react";
import { useForm } from "react-hook-form";
import { Butterfly } from "../../../../../server/controllers/butterfly/types";

function CreateButterfly() {
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <form method="POST" action="http://localhost:8000/create">
      <input type="text" placeholder="Name" name="name" />
      <input type="text" name="species" placeholder="Species" />
      <input type="text" name="link" placeholder="Link" />
      <input type="text" name="image_url" placeholder="Image Url" />

      <input type="submit" />
    </form>
  );
}

export default CreateButterfly;
