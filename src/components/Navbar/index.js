import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, CogIcon } from "@heroicons/react/24/solid";

export function NavbarDark() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl bg-gradient-to-r from-purple-900 to-purple-600 px-4 py-3"
      style={{
        backgroundImage: "linear-gradient(to right top, #af47f6, #a141e0, #933bcb, #8536b6, #7730a1, #682b8d, #592779, #4b2266, #391c4e, #281637, #190f21, #040007)"
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton color="white">
            <CogIcon className="h-4 w-4" />
          </IconButton>
          <IconButton color="white">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarDark;

