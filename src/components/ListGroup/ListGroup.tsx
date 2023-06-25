// import {} from "react";
import { MouseEvent } from "react";
import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none,
  padding: 0
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

// props immutable
// state mutable
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// props: Props ---------------------------------------------------------------- first solution
// {items, heading}}: Props ---------------------------------------------------------------- second solution
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   immutabe
  //   const items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  //   muteable
  //   let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
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
      <h1>{heading}</h1>
      {/*  first technique*/}
      {/* {items.length === 0 ? <p> No items found</p> : null} */}

      {/*  second technique*/}
      {items.length === 0 && <p> No items found</p>}

      {/* third technique */}
      {/* {getMessage()} */}

      {/* <li className={[styles.listGroup, styles.container].join(" ")}> */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            // try to modifiy variable value without state
            // onClick={() => (itemActiveIndex = index)}

            // modifiy variable value with state
            onClick={() => {
              // call two function on click event, wrap with curl braches, sperate with semicolon ;
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
