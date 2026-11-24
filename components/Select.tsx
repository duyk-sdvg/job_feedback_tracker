import { ComponentPropsWithRef } from "react";

interface SelectProps extends ComponentPropsWithRef<"select"> {
  className?: string;
  selectList: string[];
  textLabel: string;
}

export default function Select({
  textLabel,
  selectList,
  className,
  ...props
}: SelectProps) {
  return (
    <label>
      {textLabel}
      <select {...props}>
        {selectList.map((val, ind) => (
          <option key={ind}>{val}</option>
        ))}
      </select>
    </label>
  );
}
