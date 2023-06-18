import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <div>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Alert;

// installing es7+ plugin
// type rafce
// enter
