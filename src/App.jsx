import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Profile from './components/Profile/Profile';

const CARD_TITLES = [
  'Work',
  'Play',
  'Study',
  'Exercise',
  'Social',
  'Self Care',
];

function App() {
  const [timeframe, setTimeframe] = React.useState('weekly');

  function handleTimeframeClick(event) {
    if (event.target.classList.contains('daily') && timeframe !== 'daily') {
      setTimeframe('daily');
    }
    if (event.target.classList.contains('weekly') && timeframe !== 'weekly') {
      setTimeframe('weekly');
    }
    if (event.target.classList.contains('monthly') && timeframe !== 'monthly') {
      setTimeframe('monthly');
    }
  }

  return (
    <main>
      <Profile timeframe={timeframe} click={handleTimeframeClick} />
      <div className="cards-container">
        {CARD_TITLES.map((title) => (
          <Card key={title} title={title} timeframe={timeframe} />
        ))}
      </div>
    </main>
  );
}

export default App;
