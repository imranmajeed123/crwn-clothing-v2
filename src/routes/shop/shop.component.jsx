import { useContext } from "react";
import { ProductsContext } from "../../components/contexts/shop.context";
import ProductCard from '../../components/product-card/product-card.component';
import './shop.stypes.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (
    
    <div className="products-container">
      { products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
