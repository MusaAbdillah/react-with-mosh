interface CartItemsProps {
  id: number;
  title: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItemsProps[];
  onClear: () => void;
  onUpdate: (id: number) => void;
}

function Cart({ cartItems, onClear, onUpdate }: CartProps) {
  console.log(cartItems);
  return (
    <>
      <h3>Cart - Keranjang</h3>
      {console.log("-------------cartItems-----------")}
      {console.log(cartItems)}
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <p>Title: {cartItem.title}</p>
          <p>Quantity: {cartItem.quantity}</p>
          <button onClick={() => onUpdate(cartItem.id)}>
            {" "}
            Add {cartItem.title}
          </button>
        </div>
      ))}
      <button onClick={onClear}>Clear</button>
    </>
  );
}

export default Cart;
