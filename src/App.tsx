import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import Like from "./components/Like/Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  var buttonTypes = ["primary", "secondary", "danger", "warning", "info"];
  var randomButton = Math.floor(Math.random() * buttonTypes.length);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertEnabled, setAlertEnabled] = useState(false);
  const [likeEnabled, setLikeEnabled] = useState(false);
  const [button, setButton] = useState({
    type: "primary",
    text: "Click me",
  });

  const handleButtonClick = (alertEnabled: boolean) => {
    setAlertEnabled(alertEnabled);
    setButton({
      ...button,
      type: buttonTypes[randomButton],
    });
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
        color={button.type}
        onClick={handleButtonClick}
        alert={alertEnabled}
      />
      <Like like={likeEnabled} setLikeEnabled={handleLikeClick} />
    </div>
  );
}

export default App;
