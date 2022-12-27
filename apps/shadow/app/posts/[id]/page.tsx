import { PageWrapper } from '@shadow/components/page-wrapper';
import { Heading } from '@shadow/components/heading';
import { Suspense } from 'react';

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getComments(postId) {
  await delay(5000);

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((res) => res.json());

  return comments;
}

async function Comments({ id }) {
  const comments = await getComments(id);

  return (
    <ul className="flex flex-col gap-2">
      {comments.map((comment) => (
        <li key={comment.id}>
          <details>
            <summary>{comment.name}</summary>
            <p>{comment.body}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
export default async function Post({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  return (
    <PageWrapper>
      <Heading>{post.title}</Heading>

      <p>{post.body}</p>

      <h2 className="font-bold text-xl text-blue-500">Comments</h2>

      <Suspense fallback="Loading...">
        {
          // will be fixed: https://github.com/microsoft/TypeScript/pull/51328
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          <Comments id={post.id} />
        }
      </Suspense>
    </PageWrapper>
  );
}
