// GrillView.js
import React from 'react';

const GrillView = ({ products }) => (
  <div >
    <h2>Grill View</h2>
    {/* Renderiza los productos en la vista de Grill */}
    {products.map(product => (
      <div key={product.id}>{product.name}</div>
    ))}
  </div>
);

export default GrillView;
