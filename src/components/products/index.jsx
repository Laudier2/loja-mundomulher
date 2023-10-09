import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {

  const products = useSelector(state => state.products.items)

  //console.log(products)


  return (
    <Styles.Container>
      {products == "" ? <ReactLoading className='container col-sm-2' type='bars' color='#0000FF' /> : products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
  );
};

export default Products;
