import "../../../syles/hero.css";
import Navbar from "../../navbar/navbar";
import MDB from "../../../assets/MDB.png";
import ROSE from "../../../assets/rose_fruit.png";
import PLAY from "../../../assets/play.svg";

function Hero() {
  return (
    <header className='hero container'>
      <Navbar />
      <div className='hero_content'>
        {/* description box */}
        <div className='hero_descriptionBox'>
          <h1 className='hero_title'>john wick : prabellum</h1>
          {/* rating */}
          <div className='hero_ratingBox'>
            <div className='hero_subImg'>
              <img src={MDB} alt='MDB logo' />
              <span>86.0 / 100</span>
            </div>
            <div className='hero_subImg'>
              <img src={ROSE} alt='rose' />
              <span>97%</span>
            </div>
          </div>
          <p>
            John Wick is on the run after killing a member of the international
            assasins guild, and with a $14 million price tag on his head, he is
            the target of the men and women everywhere.
          </p>
          <button className='hero_btn'>
            <img src={PLAY} alt='play' />
            <span className='hero_btnText'>watch trailer</span>
          </button>
        </div>
        <div className='hero_numbers'>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>5</h4>
        </div>
      </div>
    </header>
  );
}

export default Hero;
