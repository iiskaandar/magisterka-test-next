'use client';
import { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}
const APIToken = "16721562521414chsdjghgsdghdsgh782727217"
const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
      console.log(APIToken)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Dodaj nową pozycję"
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default AddTodo;