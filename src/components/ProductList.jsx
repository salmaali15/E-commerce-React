import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";

function ProductList({ selectedCategory }) {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => getProducts(selectedCategory)
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="row">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div>No products found for the selected category.</div>
      )}
    </div>
  );
}

export default ProductList;