'use client';

interface TodoItemProps {
  todo: { id: number; text: string };
  removeTodo: (id: number) => void;
}

const TodoItem = ({ todo, removeTodo }: TodoItemProps) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Usuń</button>
    </li>
  );
};

export default TodoItem;