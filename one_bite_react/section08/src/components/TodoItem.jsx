import { TodoDispatchContext } from "../App";
import "./TodoItem.css";
import { memo, useContext } from "react";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteClick}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);

// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 하지 마라
//   // F -> Props 바뀜 -> 리렌더링 하라

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
