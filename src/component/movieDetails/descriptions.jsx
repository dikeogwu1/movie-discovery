import "../../syles/descriptions.css";
import ThreeInOne from "../../assets/ThreeInOne.png";

function Description({ overview, credits, params }) {
  return (
    <article className='description'>
      <div className='description_item1'>
        <p className='descrition_overview' data-testid='movie-overview'>
          {overview}
        </p>
        <p>
          Director:{" "}
          <span className='description_makers'>{credits.crew[3].name}</span>
        </p>
        <p>
          writers:{" "}
          <span className='description_makers'>
            {credits.crew[4].name}, {credits.crew[5].name}
          </span>
        </p>
        <p>
          stars:{" "}
          <span className='description_makers'>
            {credits.cast[0].name}, {credits.cast[1].name}
          </span>
        </p>
        <div className='description_bottomBtn'>
          <button>
            <span>Top rated movie #65</span>
          </button>
          <strong>Awards 9 nominations</strong>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1694692106/Icons/Expand_Arrow_pyac9a.png'
            alt='open icon'
          />
        </div>
      </div>
      <div className='description_item2'>
        <div className='description_btnBox'>
          <button className='description_largeBtn1'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1694692107/Icons/Two_Tickets_y5i3g0.png'
              alt='tickets icon'
            />
            <span>See Showtime</span>
          </button>
          <button className='description_largeBtn2'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1694692107/Icons/List_jxitav.png'
              alt='toggle icon'
            />
            <span>See Showtime</span>
          </button>
        </div>
        <div className='description_bottomImg'>
          <img src={ThreeInOne} alt='movies posters' />
        </div>
      </div>
    </article>
  );
}

export default Description;
