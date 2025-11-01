import type { ReactNode } from "react";
import styles from "./Button.module.css";

type TButton = "button" | "submit" | "reset";

interface IButton {
  children: ReactNode;
  type: TButton;
  onClick?: () => void;
}

export function Button({ children, type, onClick }: IButton) {
  return (
    <button className={styles["button"]} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
