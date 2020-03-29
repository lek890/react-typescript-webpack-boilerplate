import * as React from "react";
import { getInitialItems, log } from "./utils";

//todo: when abstracting a component away can it be a function or should it be a fc
// https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853
const ListItem: React.FC<{ item: { text: number } }> = ({ item }) => {
  log("renderListItem");
  const [eachCount, setEachCount] = React.useState(item.text);
  return (
    <div onClick={() => setEachCount(eachCount + 1)}>item : {eachCount}</div>
  );
};
const List: React.FC<{ items: any; inc: VoidFunction }> = React.memo(
  ({ items, inc }) => {
    log("renderList");
    return items.map((item, key) => (
      <div key={key} onClick={inc}>
        item : {item.text}
      </div>
    ));
  }
);

export const AppComponent: React.FC = () => {
  log("render App");
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState(getInitialItems(10));
  const inc = React.useCallback(() => setCount(count => count + 1), []);
  return (
    <>
      <div>{count}</div>
      <button onClick={inc}>Incr</button>
      <List items={items} inc={inc}></List>
    </>
  );
};
