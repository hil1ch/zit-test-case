import type { ReactNode } from "react";

type TButton = "button" | "submit" | "reset";

interface IButton {
  children: ReactNode;
  type: TButton;
  className: string;
  onClick?: () => void;
}

export function Button({ children, type, className, onClick }: IButton) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
