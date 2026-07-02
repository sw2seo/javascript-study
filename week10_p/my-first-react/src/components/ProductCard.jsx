function ProductCard({ product}) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>브랜드: {product.brand}</p>
      <p>무게: {product.weight}</p>
      <p>가격: {product.price.toLocaleString()}원</p>
      <p>재고: {product.inStock ? "있음" : "없음"}</p>
    </div>
  );
}

export default ProductCard;