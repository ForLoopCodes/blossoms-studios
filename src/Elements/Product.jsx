import React from "react";

export default function Product(props) {
  return (
    <div className="productCard" style={{ background: props.img }}>
      <img src={props.img} alt={props.name} />
      <nav>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </nav>
    </div>
  );
}
