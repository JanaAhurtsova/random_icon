import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import icons from './metadata';
import { DELAY } from './constant/timers';
import { random } from './utils/random';
import './App.css';

function App() {
  const [randomIcon, setRandomIcon] = useState<IconProp>();

  const generateIcon = () => {
    setTimeout(() => {
      const index = random(icons.length);
      setRandomIcon(icons[index] as IconProp);
    }, DELAY);
  };

  return (
    <div className="wrapper">
      <button onClick={generateIcon}>Generate icon</button>
      {randomIcon && (
        <FontAwesomeIcon icon={randomIcon} size="3x" color="#646cff" />
      )}
    </div>
  );
}

export default App;
