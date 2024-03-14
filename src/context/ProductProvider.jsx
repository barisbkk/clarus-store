import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//* 1. ADIM : context oluştur
const ProductContext = createContext();

//* 2. ADIM : sarmalayıcı componenti oluştur. Saklanan veriler, fonskiyonlar burada tanımlanır ve buradan paylaşılır
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  console.log(search);
  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <ProductContext.Provider value={{ products, loading, search, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

//* Bu kısım zorunlu değil sadece consuming yaparken kolaylık sağlıyor fazladan import yapmayı engelliyor
export const useProducts = () => {
  return useContext(ProductContext);
};

//! react hooklarını javascript fonksiyonları içerisinde kullanamadığımız için custom hooklara ihtiyaç duyarız
//? custom hooklar use keywordü ile başlamak zorundadır
//* custom hooklar jsx return etmez
