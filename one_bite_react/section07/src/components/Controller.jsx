const Controller = ({ onClick1 }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClick1(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClick1(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClick1(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClick1(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClick1(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClick1(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
