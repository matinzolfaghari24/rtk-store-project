import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
// import { useProducts } from "../context/ProductProvider";
import { useSelector,useDispatch } from "react-redux";
import styles from "./ProductsPage.module.css";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import store from "../app/store"; 
import { fetchProducts } from "../features/product/productSlice";

function ProductsPage() {
  const dispatch = useDispatch()
  const store = useSelector(store => store.product)
  const products = store.products;
  
  // const products = [];
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  useEffect(() => {
    setDisplayed(products);
    setSearch(query.search|| "");
    setQuery(getInitialQuery(searchParams));
  }, [products]);
  
  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
