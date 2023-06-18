import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {children}
      </div>
    </div>
  );
}

export default Alert;

// installing es7+ plugin
// type refce
// enter
