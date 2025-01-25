import Button from "../Button";
import Styles from "./CartSummaryActions.module.css";

type CartSummaryActionsType = {
  handleRedirect: () => void;
};

const CartSummaryActions = ({ handleRedirect }: CartSummaryActionsType) => (
  <div className={Styles.cartActions}>
    <Button onClick={handleRedirect} variant="secondary">
      Continuar comprando
    </Button>
    <Button onClick={() => console.log("pagamento")}>Ir para pagamento</Button>
  </div>
);

export default CartSummaryActions;
