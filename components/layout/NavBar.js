import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <Link href="/">All meetups</Link>
          <Link href="/new-meetup">Add new meetup</Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
