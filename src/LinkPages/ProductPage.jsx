import React from "react";
import Product from "../Elements/Product";

export default function ProductPage() {
  return (
    <div>
      <h1>Our Mods</h1>
      <Product
        name="Mod 1"
        price="$100"
        img="https://images.unsplash.com/photo-1612837017391-4b6b2b0e2b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kJTIwY2FyJTIwYmVhY2glMjBtb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      />
    </div>
  );
}
