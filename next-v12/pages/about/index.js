import Head from 'next/head';
import AboutLayout from '../../components/About/AboutLayout';

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>About us | Next App</title>
      </Head>
      <h1>About page</h1>
      <AboutLayout/>
    </div>
  );
};
export default About;