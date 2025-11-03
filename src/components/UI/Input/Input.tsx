interface IInput {
  placeholder?: string;
  value?: string;
  type: string;
  className: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, value, type, className, checked, onChange }: IInput) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      type={type}
      checked={checked}
      onChange={onChange}
    />
  );
}
