import React from 'react';

interface ItemProps {
  hasItem: boolean,
  clicked: boolean,
  clickItem: React.MouseEventHandler<HTMLDivElement>,
}

const Item: React.FC<ItemProps> = (props) => {

  if (props.clicked && props.hasItem) {
    return (
      <div style={{width: "50px", height: "50px", backgroundColor: "yellow", margin: "5px"}}>
        <span style={{lineHeight: "50px",}}>O</span>
      </div>
    );
  } else if (props.clicked && !props.hasItem) {
    return (
      <div style={{width: "50px", height: "50px", backgroundColor: "white", margin: "5px"}}>

      </div>
    );
  }

  return (
    <div onClick={props.clickItem} style={{width: "50px", height: "50px", backgroundColor: "grey", margin: "5px"}}>

    </div>
  );


};

export default Item;