import { createContext, useEffect, useState } from "react";
import api from "../services/config";
import { useContext } from "react";

const ProductContext = createContext();
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id == id);

  return result;
};

export default ProductProvider;
export { useProducts,useProductDetails };
