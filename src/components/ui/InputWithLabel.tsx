import { Input } from "../ui/input";

const InputWithLabel = ({
  id,
  name,
  label,
  error,
  className,
  isRequired,
  placeholder,
  ...props
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  placeholder: string;
  className?: string;
  isRequired?: boolean;
}) => {
  return (
    <div className={className}>
      <label id={id} className="text-sm">
        {label}
        {isRequired && (
          <span className="text-red-600 dark:text-red-400">*</span>
        )}
      </label>
      <Input
        id={id}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        {...props}
        className="mb-1"
      />
      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputWithLabel;
