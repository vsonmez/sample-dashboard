import React from "react";
import getButtonStyles from "../../helpers/get-button-styles.helper";
import ButtonTypes from "./models/button-types.type";
import ButtonVariants from "./models/button-variants.type";

type ButtonIconProps = {
  onClick?: () => void;
  type?: ButtonTypes;
  className?: string;
  variant?: ButtonVariants;
  children: React.ReactNode;
};

const ButtonIcon = ({ children, className, onClick, type, variant = "primary" }: ButtonIconProps) => {
  const baseClass = "bg-white font-bold p-1 rounded transition-colors ring-1";
  const buttonClass = React.useRef(`${baseClass} ${className || ""}`);
  const [buttonStyles, setButtonStyles] = React.useState(getButtonStyles(variant, buttonClass.current, true));

  React.useEffect(() => {
    setButtonStyles(getButtonStyles(variant, buttonClass.current, true));
  }, [variant, buttonClass]);

  return (
    <button className={buttonStyles} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(ButtonIcon);
