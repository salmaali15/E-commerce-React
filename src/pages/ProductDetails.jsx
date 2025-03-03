import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id)
  });

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{product.title}</h2>
            <p className="lead text-success">${product.price}</p>
            <p className="text-muted">{product.description}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <button className="btn btn-primary mt-3">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;