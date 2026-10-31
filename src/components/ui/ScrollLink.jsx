import { Link } from "react-scroll";
import { SCROLL_OPTIONS } from "./motion";

// react-scroll's Link renders an <a> without href, which keyboard users can't
// reach. Passing the hash keeps it focusable and gives a no-JS fallback.
export default function ScrollLink({ to, children, ...props }) {
  return (
    <Link to={to} href={`#${to}`} {...SCROLL_OPTIONS} {...props}>
      {children}
    </Link>
  );
}
