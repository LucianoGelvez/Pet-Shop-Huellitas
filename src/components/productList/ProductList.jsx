import StackView from './StackView';
import GrillView from './GrillView';
import { useState } from 'react';

const ProductList = ({ products }) => {
  const [viewType, setViewType] = useState('stack');

  const handleViewChange = () => {
    setViewType(prevType => (prevType === 'stack' ? 'grill' : 'stack'));
  };

  return (
    <div>
      <button onClick={handleViewChange}>Cambiar Vista</button>
      {viewType === 'stack' ? (
        <StackView products={products} />
      ) : (
        <GrillView products={products} />
      )}
    </div>
  );
};

export default ProductList;