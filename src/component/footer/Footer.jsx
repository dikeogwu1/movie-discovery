import "../../syles/footer.css";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";
import Youtube from "../svg/Youtube";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_box'>
        <div className='footer_icons'>
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
        <div className='footer_policies'>
          <strong>Conditions of use</strong>
          <strong>Privacy & Policy</strong>
          <strong>Press Room</strong>
        </div>
        <strong className='footer_copyright'>
          &copy; {new Date().getFullYear()} HNGx task | by Fabian Ikem
        </strong>
      </div>
    </footer>
  );
}

export default Footer;
