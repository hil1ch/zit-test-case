interface IInput {
  placeholder?: string;
  value?: string;
  type: string;
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, value, type, className, onChange }: IInput) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}
