import React, {useState} from 'react';
import Item from "../../components/Item/Item";
import ButtonReset from "../../components/Button/Button";
import Info from "../../components/Info/Info";

interface ItemData {
  hasItem: boolean,
  clicked: boolean,
  id: string,
}

interface GameBoardProps {
  size: number
}

const GameBoard: React.FC<GameBoardProps> = (props) => {
  const [gameEnd, setGameEnd] = useState<boolean>(false);

  const createItems = () => {
    const allItems: ItemData[] = [];

    for (let i = 0; i < props.size; i++) {
      allItems.push({id: (Date.now().toString() + i), hasItem: false, clicked: false});
    }
    const randomIndex = Math.floor(Math.random() * 36);
    const randomItem = allItems[randomIndex];
    randomItem.hasItem = true;
    return allItems;
  }

  const [items, setItems] = useState<ItemData[]>(createItems());
  const [tryCount, setTryCount] = useState<number>(0);

  const clickItem = (itemId: string) => {
    if (gameEnd) {
      alert('Game over');
      return;
    }
    const itemsCopy: ItemData[] = [...items];
    const currentItem = itemsCopy.find(item => item.id === itemId);

    if (currentItem) {
      currentItem.clicked = true;
      setItems(itemsCopy);
      setTryCount(tryCount + 1)
      if (currentItem.hasItem) {
        alert('Элемент найден');
        setGameEnd(true);
      }
    }
  }

  const resetGame = () => {
    setItems(createItems())
    setTryCount(0)
    setGameEnd(false);
  }

  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "370px"}}>
      {items.map(item => {
        return <Item key={item.id} hasItem={item.hasItem} clicked={item.clicked} clickItem={() => clickItem(item.id)}/>
      })}
      <div style={{marginLeft: "150px"}}>
        <Info count={tryCount}></Info>
        <ButtonReset reset={resetGame}/>
      </div>
    </div>
  );
};

export default GameBoard;