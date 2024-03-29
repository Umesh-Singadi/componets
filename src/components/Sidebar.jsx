import classNames from "classnames";
import Link from "./Link";
import useNavigation from "../hooks/use-navigation";

function Sidebar() {
  const { currentPath } = useNavigation();
  const links = [
    { textToShow: "Dropdown", path: "/" },
    { textToShow: "Accordion", path: "/accordion" },
    { textToShow: "Buttons", path: "/buttons" },
    { textToShow: "Modal", path: "/modal" },
    { textToShow: "Table", path: "/table" },
    { textToShow: "Counter", path: "/counter" },
    { textToShow: "Counter2", path: "/counter2" },
  ];

  // eslint-disable-next-line no-unused-vars
  const classes = classNames("mb-10", {
    "bg-red-500": currentPath,
  });
  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.path}
        className={classNames("mb-5 mr-5")}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.textToShow}
      </Link>
    );
  });
  return (
    <div className="sticky  top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
