import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ButtonDarkMode from "./ButtonDarkMode";
import CollapseButton from "./CollapseButton";

function Navbar() {
  return (
    <nav className="px-3 md:px-10 py-3 ">
      <section>
        <div className="flex justify-between md:hidden">
          <CollapseButton />

          <ButtonDarkMode />
        </div>
        <div className="hidden md:flex justify-between items-center ">
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

            <ButtonDarkMode />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
