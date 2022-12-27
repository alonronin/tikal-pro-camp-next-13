export default async function (req, res) {
  const response = await fetch(`${process.env.API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  }).then((res) => res.json());

  res.json(response);
}
