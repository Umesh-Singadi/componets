import useNavigationContext from "../hooks/NavigationContext";

function Link({ to, children }) {
  const { navigate } = useNavigationContext();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
