import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useProducts } from "../context/ProductProvider";
const Products = () => {
  //! veri çekme işlemini burada yaptığımızda problem şu oluyor. Biz her detaile gidip geri geldiğimizde Products sayfası yeniden render olduğu için stateler initial değerlerie geri dönüyor ve bu nedenle arama yapılan veriler kayboluyor bu da istenen bir durum olmaz. Arama sonuçlarının kalabilmesi için statelerimizi globale taşıdık.
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");
  // console.log(search);
  // const getData = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(
  //       `https://dummyjson.com/products/search?q=${search}`
  //     );
  //     console.log(data);
  //     setProducts(data.products);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // // useEffect(() => {
  // //   getData();
  // // }, []);//!compoentnDidMount yani başlagıçta çalış birdaha çalışma
  // useEffect(() => {
  //   getData();
  // }, [search]); //! search statei değiştikçe getData fonksiyonu çalışsın

  const { products, loading } = useProducts();

  return (
    <div className="container">
      <SearchInput />
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>
      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="card-div">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
    </div>
  );
};

export default Products;
