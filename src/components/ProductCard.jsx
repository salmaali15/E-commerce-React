import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain", borderRadius: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-outline-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
