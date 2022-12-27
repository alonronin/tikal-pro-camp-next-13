import { AddTodo } from './AddTodo';
import { PageWrapper } from '@shadow/components/page-wrapper';
import { TodoItem } from './TodoItem';

export default async function Todos() {
  const todos = await fetch(`${process.env.API_URL}/todos`).then((res) =>
    res.json()
  );
  return (
    <PageWrapper>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>

      <AddTodo />
    </PageWrapper>
  );
}
