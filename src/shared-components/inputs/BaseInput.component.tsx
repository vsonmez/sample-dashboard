import React from "react";

// TODO: input tiplerini barındıran bir enum oluşturulacak.
export enum InputTypes {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  PASSWORD = "password",
  DATE = "date",
  DATETIME_LOCAL = "datetime-local",
  TIME = "time",
  MONTH = "month",
  WEEK = "week",
  URL = "url",
  SEARCH = "search",
  TEL = "tel",
  COLOR = "color",
  FILE = "file",
  RANGE = "range",
  HIDDEN = "hidden",
  CHECKBOX = "checkbox",
  RADIO = "radio",
}

interface BaseInputProps {
  type?: InputTypes;
  label: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<BaseInputProps> = ({
  type = "text",
  label: inputLabel,
  id: inputId,
  value: inputValue,
  onChange: onInputChange,
  ...restProps
}) => (
  <div className="flex flex-col gap-2" aria-roledescription="base-input">
    {inputLabel && (
      <label className="font-medium text-gray-900" htmlFor={inputId}>
        {inputLabel}
      </label>
    )}
    <input
      className="outline-none ring-1 ring-gray-300 px-2 py-1 rounded focus:ring-indigo-500 focus:ring-2 transition-colors"
      type={type}
      id={inputId}
      value={inputValue}
      onChange={onInputChange}
      {...restProps}
    />
  </div>
);

export default React.memo(Input);
