import { FC, TextareaHTMLAttributes } from "react";

type Props = {
  className?: string;
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormFieldTextarea: FC<Props> = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label
        htmlFor={props.id}
        className="field-label"
      >
        {label}
      </label>
      <textarea
        {...props}
        className="field-input field-input-focus max-h-96"
      />
    </div>
  );
};

export default FormFieldTextarea;
