export default async function (req, res) {
  const todo = req.body;

  const result = await fetch(`${process.env.API_URL}/todos/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: todo.completed,
    }),
  });

  res.json(result);
}
