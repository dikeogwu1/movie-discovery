import "../../syles/navbar.css";
import TV from "../../assets/tv.png";
import Search from "../svg/Search";
import Hamburger from "../svg/Hamburger";
import { useState } from "react";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className={`${isNavbarOpen ? "nav" : "nav close"}`}>
      <div className='nav_logo'>
        <img src={TV} alt='tv' />
        <strong>MovieBox</strong>
      </div>
      <form className='nav_search'>
        <input
          type='text'
          className='nav_input'
          placeholder='What do you want to watch?'
        />
        <button>
          <Search />
        </button>
      </form>
      <div className='nav_actions'>
        <strong>Sign in</strong>
        <button
          onClick={() => setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen)}
        >
          <Hamburger />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
