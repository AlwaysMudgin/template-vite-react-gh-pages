import React from 'react';
import profilePic from '../../assets/images/image-jeremy.png';

function Profile({ timeframe, click }) {
  return (
    <section className="profile">
      <div className="profile-main">
        <div className="profile-pic-container">
          <img className="profile-pic" src={profilePic} alt="picture of user" />
        </div>
        <div className="profile-text">
          <p className="preface">Report for</p>
          <h1 className="user-name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-btns">
        <button
          className={timeframe === 'daily' ? 'btn daily active' : 'btn daily'}
          onClick={click}
        >
          Daily
        </button>
        <button
          className={
            timeframe === 'weekly' ? 'btn weekly active' : 'btn weekly'
          }
          onClick={click}
        >
          Weekly
        </button>
        <button
          className={
            timeframe === 'monthly' ? 'btn monthly active' : 'btn monthly'
          }
          onClick={click}
        >
          Monthly
        </button>
      </div>
    </section>
  );
}

export default Profile;
