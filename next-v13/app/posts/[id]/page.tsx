import { Metadata } from 'next';

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return response.json();
}

type Props = {
  params: {
    id: string;
  }
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
 const post = await getData(id);
  return {
    title: post.title,
  };
};

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);
  return (
    <div>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </div>
  );
};

export default Post