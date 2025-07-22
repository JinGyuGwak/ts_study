const Controller = ({ onClick1 }) => {
  const values = [-1, -10, -100, 100, 10, 1];

  return (
    <div>
      {values.map((value, index) => (
        <button key={index} onClick={() => onClick1(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};

export default Controller;
