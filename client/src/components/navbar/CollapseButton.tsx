import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function CollapseButton() {
  return (
    <Sheet>
      <SheetTrigger asChild aria-describedby="menu">
        <Button variant="outline" className="px-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild>
              <Link to="/">Blog</Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <ul className="flex flex-col gap-2 mt-5">
          <li>
            <SheetClose asChild className="w-full flex">
              <Link
                to="/auth/register"
                className="w-full px-5 py-1 hover:bg-muted rounded-md"
              >
                Register
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild className="w-full flex">
              <Link
                to="/auth/login"
                className="w-full px-5 py-1 hover:bg-muted rounded-md"
              >
                Login
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild className="w-full flex">
              <Link
                to="/post/blog"
                className="w-full px-5 py-1 hover:bg-muted rounded-md"
              >
                Blog
              </Link>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default CollapseButton;
