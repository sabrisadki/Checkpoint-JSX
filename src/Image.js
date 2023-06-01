import React from "react";

const Image = ({ product }) => {
  return <img src={product.image} alt={product.name} />;
};

export default Image;