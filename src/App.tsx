import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import Like from "./components/Like/Like";

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

  return (
    <div>
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
      <Button
        children="Alert Me!"
        onClick={handleButtonClick}
        alert={alertEnabled}
        text={button.detail.text}
      />
      <Like like={likeEnabled} setLikeEnabled={handleLikeClick} />
    </div>
  );
}

export default App;
