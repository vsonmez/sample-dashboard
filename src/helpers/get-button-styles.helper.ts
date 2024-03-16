const getButtonStyles = (
  variant: "primary" | "success" | "warning" | "danger",
  baseClass: string,
  isButtonIcon?: boolean,
  isButtonBordered?: boolean
) => {
  const buttonBorderedStyleMap = {
    primary: "border-indigo-500 hover:border-indigo-700 text-indigo-500 hover:text-indigo-700",
    success: "border-green-600 hover:border-green-700 text-green-600 hover:text-green-700",
    warning: "border-orange-500 hover:border-orange-700 text-orange-500 hover:text-orange-700",
    danger: "border-red-500 hover:border-red-700 text-red-500 hover:text-red-700",
  };
  const buttonStyleMap = {
    primary: "bg-indigo-500 hover:bg-indigo-700",
    success: "bg-green-600 hover:bg-green-700",
    warning: "bg-orange-500 hover:bg-orange-700",
    danger: "bg-red-500 hover:bg-red-700",
  };
  const buttonIconStyleMap = {
    primary: "ring-indigo-500 hover:ring-indigo-700 text-indigo-500 hover:text-indigo-700 hover:ring-2",
    success: "ring-green-600 hover:ring-green-700 text-green-600 hover:text-green-700 hover:ring-2",
    warning: "ring-orange-500 hover:ring-orange-700 text-orange-500 hover:text-orange-700 hover:ring-2",
    danger: "ring-red-500 hover:ring-red-700 text-red-500 hover:text-red-700 hover:ring-2",
  };
  if (isButtonBordered) {
    return `${buttonBorderedStyleMap[variant] || buttonBorderedStyleMap.primary} ${baseClass}`;
  }
  if (isButtonIcon) {
    return `${buttonIconStyleMap[variant] || buttonIconStyleMap.primary} ${baseClass}`;
  }
  return `${buttonStyleMap[variant] || buttonStyleMap.primary} ${baseClass}`;
};

export default getButtonStyles;
