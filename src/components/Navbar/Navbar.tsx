import React from "react";

interface NavbarProps {
  cartItemCount: number;
}

function Navbar({ cartItemCount }: NavbarProps) {
  return (
    <>
      <div>Navbar</div>
      <p> {cartItemCount}</p>
    </>
  );
}

export default Navbar;
