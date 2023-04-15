import React from "react";

export default function ProductsCard({ title, price, image, link }) {
  return (
    <>
      <h3>{title}</h3>
      <img src={image} alt={title} width="50px" />
      <p>{price}</p>
      <button>
      <a href={link} target="_blank" rel="nofollow noreferrer">Buy</a>
      </button>
    </>
  );
}
