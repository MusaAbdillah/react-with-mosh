// import {} from "react";
import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  //   immutabe
  //   const items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  //   muteable
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  //   items = [];

  //   hook, default arguments is -1, no one selected
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p> No items found</p> : null;
  };

  //   handle click
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/*  first technique*/}
      {/* {items.length === 0 ? <p> No items found</p> : null} */}

      {/*  second technique*/}
      {items.length === 0 && <p> No items found</p>}

      {/* third technique */}
      {/* {getMessage()} */}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // try to modifiy variable value without state
            // onClick={() => (itemActiveIndex = index)}

            // modifiy variable value with state
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
