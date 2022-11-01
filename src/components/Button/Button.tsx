import React from 'react';

interface ButtonProps {
  reset: React.MouseEventHandler<HTMLButtonElement>,
}

const ButtonReset: React.FC<ButtonProps> = props => {
  return (
    <div style={{marginTop: "5px"}}>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

export default ButtonReset;