'use client';

import { useRouter } from 'next/navigation';

export function AddTodo() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const payload = Object.fromEntries(form.entries());
    const body = JSON.stringify(payload);
    console.log(body);

    await fetch(`/api/add-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    e.target.reset();

    await router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="text"
        name="title"
        className="rounded-md border border-blue-500 px-4 py-2"
      />
      <button className="rounded-md bg-blue-500 text-white px-4 py-2">
        Add Todo
      </button>
    </form>
  );
}
