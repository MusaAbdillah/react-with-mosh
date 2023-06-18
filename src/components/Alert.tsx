import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: (alertEnabled: boolean) => void;
}

function Alert({ children, onClick }: Props) {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => onClick(false)}
        ></button>
      </div>
    </div>
  );
}

export default Alert;

// installing es7+ plugin
// type rafce
// enter
