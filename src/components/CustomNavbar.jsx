"use client";

import { Button, DarkThemeToggle, Navbar } from "flowbite-react";

export default function CustomNavbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 dark:text-white">
          Shivam Enterprises
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-yellow-500   rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
          Get started
        </Button>
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#!"
          onClick={(event) => scrollToSection(event, "story")}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="#!"
          onClick={(event) => scrollToSection(event, "products")}
        >
          Products
        </Navbar.Link>
        {/* <Navbar.Link href="#">Services</Navbar.Link> */}
        <Navbar.Link
          href="#!"
          onClick={(e) => {
            scrollToSection(e, "contact");
          }}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
