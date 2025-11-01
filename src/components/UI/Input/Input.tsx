import styles from "./Input.module.css";

interface IInput {
  placeholder?: string;
  value: string;
  type: string;
  onChange?: () => void;
}

export function Input({ placeholder, value, type, onChange }: IInput) {
  return (
    <input
      className={styles["input"]}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}
