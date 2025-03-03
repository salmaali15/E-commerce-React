import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar onCategorySelect={setSelectedCategory} />
      <div className="container mt-4" style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Home;
