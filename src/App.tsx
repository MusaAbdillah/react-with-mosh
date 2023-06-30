import ListGroup from "./components/ListGroup";
import ArrayGroup from "./components/ArrayGroup";
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

  const [bugs, setBugs] = useState([
    { id: 1, title: "front end bug", fixed: false },
    { id: 2, title: "back end bug", fixed: false },
  ]);

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

  // update array of object
  const handleArrayOfObject = (fixed: boolean, id: number) => {
    setBugs(
      bugs.map((bug) => (bug.id === id ? { ...bug, fixed: fixed } : bug))
    );
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

      <ArrayGroup records={bugs} setDone={handleArrayOfObject} />

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
