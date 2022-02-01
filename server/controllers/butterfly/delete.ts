import express from "express";
import knex from "../../db";

const router: express.Router = new (express.Router as any)();
// We catch the id which comes from our frontend and
// delete the butterfly which has that id from the database
router.delete("/:id", async (req, res) => {
  knex("butterfly")
    .delete()
    .where("id", req.params.id)
    .del()
    .then(function () {
      knex
        .select()
        .from("butterfly")
        .then(function (butterfly) {
          res.send(butterfly);
        });
    });
});

export { router };
