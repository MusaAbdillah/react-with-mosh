import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertEnabled, setAlertEnabled] = useState(false);

  const handleButtonClick = (alertEnabled: boolean) => {
    console.log("------ alertEnabled ------");
    console.log(alertEnabled);
    alertEnabled ? setAlertEnabled(false) : setAlertEnabled(true);
  };

  return (
    <div>
      {alertEnabled && <Alert>Hello world</Alert>}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button
        children="Alert Me!"
        color="primary"
        onClick={handleButtonClick}
        alert={alertEnabled}
      />
    </div>
  );
}

export default App;
