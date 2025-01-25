import { ReactNode } from "react";
import Input, { InputProps } from "../Input";
import Styles from "./IconInput.module.css";

export type IconInputProps = {
  children: ReactNode;
} & InputProps;

const IconInput = ({ children, ...props }: IconInputProps) => (
  <div className={Styles.IconInputContainer}>
    <Input {...props} />
    <div className={Styles.IconContainer}>{children}</div>
  </div>
);

export default IconInput;
