import useNavigationContext from "../hooks/NavigationContext";

function Rout({ path, children }) {
  const { currentPath } = useNavigationContext();
  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Rout;
