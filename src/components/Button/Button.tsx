import classNames from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={classNames.container} onClick={onClick}>
      {text}
    </button>
  );
}
