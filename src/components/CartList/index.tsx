import { Product } from "../../common/types/product";
import CartEmptyMessage from "../CartEmptyMessage";
import CartItem from "../CartItem";
import Typography from "../Typography";
import Styles from "./CartList.module.css";

type CartListProps = {
  cartItems: Product[];
  onRemove: (id: number) => void;
};

const CartList = ({ cartItems, onRemove }: CartListProps) => (
  <div className={Styles.cartItems}>
    <Typography variantStyle="body-large-bold">Detalhes da compra</Typography>
    {cartItems?.length > 0 ? (
      cartItems.map((item) => (
        <CartItem item={item} removeFromCart={onRemove} />
      ))
    ) : (
      <CartEmptyMessage />
    )}
  </div>
);

export default CartList;
