import { Metadata } from 'next';
import Link from 'next/link';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {});

  if (!response.ok) throw new Error('Unable to fetch posts!');
  return response.json();
};

export const metadata: Metadata = {
  title: 'Posts | Next Js',
};

const Posts = async () => {
  const posts = await getData();

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {
          posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Posts;