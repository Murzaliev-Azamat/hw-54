import React from 'react';

interface InfoProps {
  count: number;
}

const Info: React.FC<InfoProps> = (props) => {
  return (
    <div>
      <span>Tries: {props.count}</span>
    </div>
  );
};

export default Info;