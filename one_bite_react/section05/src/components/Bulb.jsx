import { useState } from 'react';
const Bulb = ({ color }) => {
  const [light, setLight] = useState(color);
  console.log('color:', color);
  console.log('light:', light);

  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
  );
};

export default Bulb;
