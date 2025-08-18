import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-purple-400 font-medium transition duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
