import Link from "next/link";
import Image from "next/image";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'About', path: '/about' },
  { id: 4, title: 'Contacts', path: '/contacts' },
];

const RNavbar = () => {

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image src="/vercel.svg" width={60} height={60} alt="logo" />
      </div>
      <div className="nav__links">
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>{title}</Link>
        ))}
      </div>
    </nav>
  );
};

export default RNavbar;