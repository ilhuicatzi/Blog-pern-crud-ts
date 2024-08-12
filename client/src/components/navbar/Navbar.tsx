import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ButtonDarkMode from "./ButtonDarkMode";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-3 md:px-10 py-1 md:py-3 ">
      <h2 className="text-3xl font-bold">
        <Link to="/">Blog</Link>
      </h2>
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-2">
          <li>
            <Link to="/auth/register">
              <Button variant="ghost">Register</Button>
            </Link>
          </li>
          <li>
            <Link to="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </li>
          <li>
            <Link to="/post/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
          </li>
        </ul>
        <ButtonDarkMode/>
      </div>
    </nav>
  );
}

export default Navbar;
