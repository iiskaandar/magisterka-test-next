'use client'

import { useState, useEffect } from 'react';

interface Todo {
  text: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const handleAddTodo = (todoText: string) => {
    const newTodo: Todo = { text: todoText };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Lista ToDo</h1>
      <input type="text" onKeyUp={(e) => e.key === 'Enter' && handleAddTodo((e.target as HTMLInputElement).value)} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => handleDeleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.text}
      <button onClick={onDelete}>Usuń</button>
    </li>
  );
};