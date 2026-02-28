import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between py-4 items-center border-b border-b-gray-300">
      <Link href="/">Home</Link>

      <div className="flex items-center gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>

      {/* <Link href="/logout">Logout</Link> */}
    </header>
  );
};

export default Header;
