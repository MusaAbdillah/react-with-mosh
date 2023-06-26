import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "info";
  onClick: (alertEnabled: boolean) => void;
  //   current state
  alert: boolean;
  text: string;
}

// props with default values
const Button = ({
  children,
  color = "primary",
  onClick,
  alert,
  text,
}: Props) => {
  //   for flip button
  const getAlert = () => {
    return alert ? true : false;
  };

  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={() => onClick(true)}
    >
      {text}
    </button>
  );
};

export default Button;
