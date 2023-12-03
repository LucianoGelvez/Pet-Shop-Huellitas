// StackView.js
import React from 'react';

const StackView = ({ products }) => (
  <div>
    <h2>Stack View</h2>
    {/* Renderiza los productos en la vista de Stack */}
    {products.map(product => (
      <div key={product.id}>{product.name}</div>
    ))}
  </div>
);

export default StackView;
