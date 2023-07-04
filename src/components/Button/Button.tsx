import classNames from "./Button.module.css";

export type ButtonKind = "primary" | "secondary";

interface ButtonProps {
  kind: ButtonKind;
  text: string;
  onClick: () => void;
}

export default function Button({ kind, text, onClick }: ButtonProps) {
  return (
    <button
      className={[classNames.container, classNames[kind]].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
