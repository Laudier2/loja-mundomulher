// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
//import rootReducer from "../../redux/root-reducer";
import CartItem from "../cart-item/index"
import { SlBasket } from "react-icons/sl";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector((state) => state.cart.cartItems)

  //console.log(cart)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          <SlBasket /> Seu Carrinho
        </Styles.CartTitle>
        {cart.map((product) =>
          <div key={product.id}>
            <CartItem key={product.id} product={product} />
          </div>
        )}
        {cart == "" ? <img style={{ marginLeft: "-50px", width: "130%" }} src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png" alt="" srcset="" /> :
          <button className="btn btn-primary btn-lg btn-block mt-5">Finaliza Compra</button>
        }
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
