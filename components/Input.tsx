import { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  className?: string;
  textLabel: string;
  isRequired?: boolean;
}

export default function Input({
  textLabel,
  className,
  isRequired = false,
  ...props
}: InputProps) {
  return (
    <label className={className}>
      {textLabel}
      {isRequired && " *"}
      <input {...props} />
    </label>
  );
}
