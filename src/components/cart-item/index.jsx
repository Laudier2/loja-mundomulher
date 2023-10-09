import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cart/cart";
import * as Styles from "./styles";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()
  const length = useSelector((state) => state.cart.length)

  const handleRemoveClick = (id) => {
    dispatch(addCart(id))
    console.log(id)
  };

  const handleIncreaseClick = (e) => {
    dispatch(addCart(e))
  };

  const handleDecreaseClick = () => {
    //dispatch(addItem({ ...product, quantity: product.quantity - 1 }))
  };

  console.log(product.product)

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.product.image} />

      <Styles.CartItemInfo>
        <p>{product.product.name}</p>
        <p>R${product.product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.product.name}`}
          />
          <b>{length}</b>
          <p>{product.cartQuantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={() => handleIncreaseClick(product)}
            aria-label={`Increase quantity of ${product.product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={() => handleRemoveClick(product.product.id)}
        aria-label={`Remove`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
