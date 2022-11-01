import React, {useState} from 'react';
import Item from "../../components/Item/Item";
import ButtonReset from "../../components/Button/Button";

interface ItemData {
  hasItem: boolean,
  clicked: boolean,
  id: string,
}

const GameBoard = () => {
  const allItems: ItemData[] = [];

  const createItems = () => {

    for (let i = 0; i < 36; i++) {
      allItems.push({id: (Date.now().toString() + i) , hasItem: false, clicked: false});
    }
    const randomIndex = Math.floor(Math.random() * 36);
    const randomItem = allItems[randomIndex];
    randomItem.hasItem = true;
    return allItems;
  }

  const resetGame = () => {

  }

  const [items, setItems] = useState<ItemData[]>(createItems());

  const clickItem = (itemId: string) => {
    const itemsCopy: ItemData[] = [...items];
    const currentItem = itemsCopy.find(item => item.id === itemId);

    if (currentItem) {
      currentItem.clicked = true;
      console.log(123)
      setItems(itemsCopy);
    }
  }

  console.log(items)

  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "370px"}}>
      {items.map(item => {
        return <Item key={item.id} hasItem={item.hasItem} clicked={item.clicked} clickItem={() => clickItem(item.id)}/>
      })}
      <ButtonReset reset={resetGame}/>
    </div>
  );
};

export default GameBoard;