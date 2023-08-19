import React, { useState } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav class="navclass">
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn" onClick={handleMenuToggle}>
        {menuOpen ? <FaBars /> : <FaTimes />}
      </label>
      <label class="logo">LOGO</label>
      <ul>
        <li>
          <a href="/dummy">Home</a>
        </li>
        <li>
          <a href="/dummy">About</a>
        </li>
        <li>
          <a href="/dummy">Events</a>
        </li>
        <li>
          <a href="/dummy">Sponsors</a>
        </li>
        <li>
          <a href="/dummy">Team</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
