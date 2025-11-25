import React from 'react';
import data from '../../data.json';
import ellipsisIcon from '../../assets/images/icon-ellipsis.svg';
import playIcon from '../../assets/images/icon-play.svg';
import selfCareIcon from '../../assets/images/icon-self-care.svg';
import socialIcon from '../../assets/images/icon-social.svg';
import studyIcon from '../../assets/images/icon-study.svg';
import workIcon from '../../assets/images/icon-work.svg';
import exerciseIcon from '../../assets/images/icon-exercise.svg';

const PREVIOUS_CAPTIONS = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
};

const BANNER_ICONS = {
  Play: playIcon,
  'Self Care': selfCareIcon,
  Social: socialIcon,
  Study: studyIcon,
  Work: workIcon,
  Exercise: exerciseIcon,
};

function Card({ title, timeframe }) {
  const styleName = title.split(' ').join('-').toLowerCase();
  const cardData = data.find((item) => item.title === title);
  const previousCaption = PREVIOUS_CAPTIONS[timeframe];
  const currentUnits =
    cardData.timeframes[timeframe].current <= 1 ? 'hr' : 'hrs';
  const previousUnits =
    cardData.timeframes[timeframe].previous <= 1 ? 'hr' : 'hrs';

  return (
    <section className={`card ${styleName}`}>
      <img
        className="banner-icon"
        src={BANNER_ICONS[title]}
        alt={`${title} icon`}
      />
      <div className="card-content">
        <h2 className="card-title">{cardData.title}</h2>
        <p className="current-data">
          {`${cardData.timeframes[timeframe].current} ${currentUnits}`}
        </p>
        <p className="previous-data">
          {`${previousCaption} - ${cardData.timeframes[timeframe].previous} ${previousUnits}`}
        </p>
        <button className="btn meatball" aria-label="more options">
          <img src={ellipsisIcon} alt="ellipsis" />
        </button>
      </div>
    </section>
  );
}

export default Card;
