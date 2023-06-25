import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "info";
  onClick: (alertEnabled: boolean) => void;
  //   current state
  alert: boolean;
}

// props with default values
const Button = ({ children, color = "primary", onClick, alert }: Props) => {
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
      {children}
    </button>
  );
};

export default Button;
