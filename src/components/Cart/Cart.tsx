interface CartProps {
  cartItems: string[];
  onClear: () => void;
}

function Cart({ cartItems, onClear }: CartProps) {
  console.log(cartItems);
  return (
    <>
      <h3>Cart - Keranjang</h3>
      {console.log("-------------cartItems-----------")}
      {console.log(cartItems)}
      {cartItems.map((cartItem) => (
        <p>{cartItem}</p>
      ))}
      <button onClick={onClear}>Clear</button>
    </>
  );
}

export default Cart;
