import express from "express";
import knex from "../../db";
import { Butterfly } from "./types";

const router: express.Router = new (express.Router as any)();

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
