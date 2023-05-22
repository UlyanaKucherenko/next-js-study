import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if ( !data ) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if ( posts ) {
      setIsLoading(false);
    }
  }, [ posts ]);

  return (
    <>
      <Head>
        <title>Posts | Next App</title>
      </Head>
      <div className="container">
        <Heading text="Posts list:"/>
        { isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            { posts && posts.map(({ id, title }) => (
              <li key={ id }>
                <Link href={ `/posts/${ id }` }>{ title }</Link>
              </li>
            )) }
          </ul>
        ) }
      < /div>
    </>
  );
};

export default Posts;