import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
// import ProductProvider from "./context/ProductProvider";
// import CartProvider from "./context/CartProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    // <CartProvider>
    // <ProductProvider>
    <Layout>
      <div>
        <Routes>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Layout>
    // </ProductProvider>
    // </CartProvider>
  );
}

export default App;
