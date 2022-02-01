import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Butterfly } from "../../../../../server/controllers/butterfly/types";

const styles = require("./card.css").default;

const ButterflyCard: React.FC<Butterfly> = (props) => {
  let navigate = useNavigate();

  async function deletePost(item: number) {
    await fetch(`http://localhost:8000/butterflies/${item}`, {
      method: "DELETE",
    });
    navigate("/");
    navigate("/butterflies");
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.image_url} alt={props.name} />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.species}>{props.species}</p>
      <p className={styles.id}> {props.id}</p>
      <div className={styles.buttons}>
        <a href={props.link}>
          
          <button className={styles.card_button}>Open</button>
        </a>
        <button
          className={styles.card_button}
          onClick={() => deletePost(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ButterflyCard;
