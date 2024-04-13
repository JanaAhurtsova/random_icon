import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import icons from './metadata';
import {getRandomItem } from './utils/get-random-item';
import { DELAY } from './constant/timers';
import { PREFIXES } from './constant/prefixes';
import './App.css';

function App() {
  const [randomIcon, setRandomIcon] = useState<IconName>();
  const [prefix, setPrefix] = useState<IconPrefix>('fas');

  const generateIcon = () => {
    setTimeout(() => {
      const iconPrefix = getRandomItem(PREFIXES);
      const icon = getRandomItem(icons[iconPrefix]) as IconName;
      setPrefix(iconPrefix);
      setRandomIcon(icon);
    }, DELAY);
  };

  return (
    <div className="wrapper">
      <button onClick={generateIcon}>Generate icon</button>
      <div className="icon">
        {randomIcon && (
          <FontAwesomeIcon icon={[prefix, randomIcon]} size="3x" color="#646cff" />
        )}
      </div>
    </div>
  );
}

export default App;
