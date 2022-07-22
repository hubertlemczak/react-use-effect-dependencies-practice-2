import { useState, useEffect } from 'react';

function StarshipsListItem({ starship }) {
  const [pilots, setPilots] = useState([]);
  useEffect(() => {
    if (starship?.pilots) {
      starship.pilots.forEach((pilot) => {
        fetch(pilot)
          .then((res) => res.json())
          .then((data) =>
            setPilots((currPilots) => [...currPilots, data.name])
          );
      });
    }
  }, [starship]);

  return (
    <li>
      {starship.name} - Pilots:{' '}
      {pilots.length > 0 ? pilots.join(', ') : 'no pilots'}
    </li>
  );
}

export default StarshipsListItem;
