import Button, { ButtonProps } from "../Button";

const IconButton = ({ children, ...props }: ButtonProps) => (
  <Button style={{ gap: "8px" }} {...props}>
    {children}
  </Button>
);

export default IconButton;
