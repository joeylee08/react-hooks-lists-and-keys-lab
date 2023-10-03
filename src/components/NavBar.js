import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const mapped = links.map(item => <a href={`#${item}`} key={item}>{item}</a>)
  return (
    <nav>
      {mapped}
    </nav>
  )
}

export default NavBar;
