import { useParams, Link } from "react-router-dom";
import TV from "../../assets/tv.png";
import "../../syles/details.css";
import data from "../../sidebarData";
import Movie from "./Movie";
import Hamburger from "../svg/Hamburger";
import { useState } from "react";

function Details() {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='details'>
      {/* open and close sidebar button */}
      <button
        className='details_sideBtn'
        onClick={() => setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)}
      >
        <Hamburger />
      </button>
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "details_aside show-sidebar" : "details_aside"
        }`}
      >
        <div className='details_logo'>
          <img src={TV} alt='MDB logo' />
          <strong>MovieBox</strong>
        </div>
        <div className='details_sidebarLinksBox'>
          {data.map((link) => {
            return (
              <Link to={`${link.link}`} className='link' key={link.id}>
                <div className='details_sidebarLink'>
                  <img src={link.img} alt={link.name} />
                  <strong>{link.name}</strong>
                </div>
              </Link>
            );
          })}
          <div className='detail_sidebarTextBox'>
            <p>Play movie quizes and earn free tickets</p>
            <small>50k people are playing now</small>
          </div>
          {/* logout */}
          <div className='details_sidebarLink'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1694692107/Icons/Logout_hacx3y.png'
              alt='logout icon'
            />
            <strong>Logout</strong>
          </div>
        </div>
      </aside>
      {/* Movie details */}
      <main>
        <Movie id={id} />
      </main>
    </div>
  );
}

export default Details;
