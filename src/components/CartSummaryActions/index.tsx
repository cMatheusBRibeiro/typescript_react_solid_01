import Button from "../Button";
import Styles from "./CartSummaryActions.module.css";

export type CartSummaryActionsType = {
  handleRedirect: () => void;
  onPayment: () => void;
};

const CartSummaryActions = ({
  handleRedirect,
  onPayment,
}: CartSummaryActionsType) => (
  <div className={Styles.cartActions}>
    <Button onClick={handleRedirect} variant="secondary">
      Continuar comprando
    </Button>
    <Button onClick={onPayment}>Ir para pagamento</Button>
  </div>
);

export default CartSummaryActions;
