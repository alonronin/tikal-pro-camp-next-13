'use client';

import { useRouter } from 'next/navigation';

export function TodoItem({ todo }) {
  const router = useRouter();
  const onClick = async (todo) => {
    await fetch(`/api/update-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: todo.id,
        completed: !todo.completed,
      }),
    });

    await router.refresh();
  };

  return (
    <li
      key={todo.id}
      className={`cursor-pointer ${todo.completed && 'line-through'}`}
      onClick={(e) => onClick(todo)}
    >
      {todo.title}
    </li>
  );
}
