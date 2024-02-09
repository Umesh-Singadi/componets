import useNavigationContext from "../hooks/NavigationContext";

function Link({ to, children }) {
  const { navigate } = useNavigationContext();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
