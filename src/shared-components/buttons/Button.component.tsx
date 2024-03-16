import React from "react";
import getButtonStyles from "../../helpers/get-button-styles.helper";
import ButtonTypes from "./models/button-types.type";
import ButtonVariants from "./models/button-variants.type";

type ButtonProps = {
  onClick?: () => void;
  text: string;
  type?: ButtonTypes;
  className?: string;
  variant?: ButtonVariants;
  isButtonBordered?: boolean;
};

const Button = ({ className, onClick, text, variant = "primary", type = "button", isButtonBordered }: ButtonProps) => {
  const baseClass = "text-white font-bold py-2 px-4 rounded transition-colors";
  const buttonClass = React.useRef(`${baseClass} ${className || ""}`);

  const [buttonStyles, setButtonStyles] = React.useState(
    getButtonStyles(variant, buttonClass.current, false, isButtonBordered)
  );

  React.useEffect(() => {
    setButtonStyles(getButtonStyles(variant, buttonClass.current, false, isButtonBordered));
  }, [variant, buttonClass, isButtonBordered]);

  return (
    <button className={buttonStyles} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default React.memo(Button);
