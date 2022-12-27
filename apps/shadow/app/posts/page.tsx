import { Heading } from '@shadow/components/heading';
import { PageWrapper } from '@shadow/components/page-wrapper';
import Link from 'next/link';

export default async function Posts() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return (
    <PageWrapper>
      <Heading>Posts</Heading>

      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="text-blue-500 hover:text-blue-800"
              href={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
