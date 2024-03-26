import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import "./style.css"

export function NavbarDark() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl bg-gradient-to-r from-purple-900 to-purple-600 px-4 py-3"
      style={{
        // Updated background color, border-radius, and box-shadow
        background: "linear-gradient(145deg, #221c40, #29214c)",
        borderRadius: "5px",
        boxShadow:
          "20px 20px 60px #201a3c, -20px -20px 60px #2c2452",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Logo
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          {/* need to get icons for each */}
          <Button>About Me</Button>
          <Button>Projects</Button>
          <Button>Resume</Button>
          <Button>Contact</Button>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarDark;
