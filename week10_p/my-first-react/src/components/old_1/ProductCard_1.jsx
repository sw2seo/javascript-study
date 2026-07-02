function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>가격: {price.toLocaleString()}원</p>
    </div>
  );
}

export default ProductCard;