import ListGroup from "./components/ListGroup";
import ArrayGroup from "./components/ArrayGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import Like from "./components/Like/Like";
import { produce } from "immer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart";
import Description from "./components/Description/Description";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  const [items, setItems] = useState([
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Berlin",
  ]);

  var buttonTypes = ["primary", "secondary", "danger", "warning", "info"];
  var randomButton = Math.floor(Math.random() * buttonTypes.length);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertEnabled, setAlertEnabled] = useState(false);
  const [likeEnabled, setLikeEnabled] = useState(false);
  const [button, setButton] = useState({
    type: "primary",
    detail: {
      text: "Click me!",
    },
  });

  const [bugs, setBugs] = useState([
    { id: 1, title: "front end bug", status: false },
    { id: 2, title: "back end bug", status: false },
  ]);

  const [games, setGames] = useState({
    id: 1,
    genre: "FPS",
    names: ["Pubg", "Free Fire", "Point Blank"],
  });

  const [cart, setCart] = useState({
    id: 1,
    cartItems: [
      { id: 1, title: "Product", status: false, quantity: 1 },
      { id: 2, title: "Product", status: true, quantity: 2 },
    ],
  });

  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", status: false, quantity: 1 },
    { id: 2, title: "Product 2", status: true, quantity: 2 },
  ]);

  const [isFullText, setIsFullText] = useState(false);

  const handleButtonClick = (alertEnabled: boolean) => {
    setAlertEnabled(alertEnabled);

    // update object
    // setButton({
    //   ...button,
    //   type: buttonTypes[randomButton],
    // });

    // update nested object
    setButton({
      ...button,
      detail: { ...button.detail, text: "Click mee!" },
    });

    // update array - add
    // setItems([...items, "Jakarta"]);

    // update array - remove
    // setItems(items.filter((item) => item != "San Francisco"));

    // update array - update
    setItems(
      items.map((item) => (item === "San Francisco" ? "Jakarta" : item))
    );
  };

  const handleLikeClick = (likeEnable: boolean) => {
    setLikeEnabled(likeEnable);
  };

  // update array of object - traditional
  const handleArrayOfObject = (fixed: boolean, id: number) => {
    setBugs(
      bugs.map((bug) => (bug.id === id ? { ...bug, fixed: fixed } : bug))
    );
  };

  // handle array of object update - immer
  const handleArrayOfObjectWithImmer = (fixed: boolean, id: number) => {
    setBugs(
      produce((draft) => {
        // find bug
        const bug = draft.find((bug) => bug.id === id);
        if (bug) bug.status = fixed;
      })
    );
  };

  // update array inside object
  const handleGame = () => {
    setGames({ ...games, names: [...games.names, "Valoran"] });
  };

  // update object inside array object
  const handleCart = (id: number) => {
    setCart({
      ...cart,
      cartItems: cart.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  const onClearCart = (id: number) => {
    setCart({
      ...cart,
      cartItems: [],
    });
  };

  const handleIsFullText = (isFullText: boolean) => {
    setIsFullText(isFullText);
  };

  return (
    <div className="container">
      {alertEnabled && (
        <Alert onClick={handleButtonClick}>
          <h2>Hello world</h2>
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <ArrayGroup records={bugs} setDone={handleArrayOfObjectWithImmer} />

      <Button
        children="Alert Me!"
        onClick={handleButtonClick}
        alert={alertEnabled}
        text={button.detail.text}
      />
      <Like like={likeEnabled} setLikeEnabled={handleLikeClick} />
      <hr />

      <Navbar cartItemCount={products.length} />
      <Cart
        cartItems={products}
        onClear={() => setProducts([])}
        onUpdate={handleCart}
      />

      <hr />
      {/* exercise */}

      <ListGroup
        items={games.names}
        heading="Games"
        onSelectItem={handleSelectItem}
      />
      <Button
        children="Update Games!"
        onClick={handleGame}
        alert={alertEnabled}
        text="Update Games"
      />

      {/* exercise 3 */}
      <Cart
        cartItems={cart.cartItems}
        onClear={() => onClearCart}
        onUpdate={handleCart}
      />
      <hr />
      <Description
        length={20}
        isFullText={isFullText}
        setIsFullText={handleIsFullText}
      />
    </div>
  );
}

export default App;
