import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="md:hidden  px-6 py-4">
      <ul className="flex flex-col space-y-4 items-start animate-slide-down">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={closeMenu} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
