import { FC, InputHTMLAttributes } from "react";

type Props = {
  className?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormFieldInput: FC<Props> = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label
        htmlFor={props.id}
        className="field-label"
      >
        {label}
      </label>
      <input
        {...props}
        className="field-input field-input-focus"
      />
    </div>
  );
};

export default FormFieldInput;
