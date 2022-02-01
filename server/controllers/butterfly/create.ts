import express from "express";
import knex from "../../db";

const router: express.Router = new (express.Router as any)();

router.post("/", async (req, res) => {
  const butterflies = await knex("butterfly");
  // We catch the request which comes from our frontend's create page and insert into the database
  // After we insert it, we send back the user to butterflies page
  const { name, species, image_url, link } = req.body;

  await knex("butterfly")
    .insert({ name: name, species: species, image_url: image_url, link: link })
    .then(() => {
      knex
        .select()
        .from("butterfly")
        .then(function (butterfly) {
          res.redirect("http://localhost:3000/butterflies");
        });
    });
});

export { router };
