import React from 'react';

const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    alert(e);
  };

  const childrenArray = React.Children.toArray(children); // children을 배열로 변환
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text}
      {children[0]}
    </button>
  );
};

export default Button;
