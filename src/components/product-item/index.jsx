import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
//import { addProductToCard } from "../../redux/cart/actions"
import { addCart } from "../../redux/cart/cart"
import { Link } from "react-router-dom";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleProductClick = () => {
    dispatch(addCart({ product }))
    console.log(product)
  }

  const handlePost = (r) => {
    console.log(r)
  }

  function LocalSto(e) {

    localStorage.removeItem("id")
    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)

    const amount = JSON.parse(dados)
    const img = JSON.parse(dados)
    const name = JSON.parse(dados)
    const desc = JSON.parse(dados)
    const price = JSON.parse(dados)
    const color = JSON.parse(dados)
    const quantity = JSON.parse(dados)
    const slug = JSON.parse(dados)
    const size = JSON.parse(dados)
    const bar_code = JSON.parse(dados)

    localStorage.setItem("img0", img.image[0])
    localStorage.setItem("img1", img.image[1])
    localStorage.setItem("img2", img.image[2])
    localStorage.setItem("img3", img.image[3])

    localStorage.setItem("color0", color.color[0])
    localStorage.setItem("color1", color.color[1])
    localStorage.setItem("color2", color.color[2])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)
    localStorage.setItem("bar_code", bar_code.bar_code)
    localStorage.setItem("slug", slug.slug)
    localStorage.setItem("amount", amount.amount)
    localStorage.setItem("size", size.size)
    localStorage.setItem("quantity", quantity.quantity)

    //console.log(dados)*/

  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.image}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick} >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>
          R${product.price}
          <Link to="/desc" onClick={() => LocalSto(product)} className="btn btn-outline-secondary m-2">
            Descrição
          </Link>
        </p>

      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
