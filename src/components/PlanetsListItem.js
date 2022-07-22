import { useState, useEffect } from 'react';

function PlanetsListItem({ planet }) {
  const [firstFilm, setFirstFilm] = useState('');

  useEffect(() => {
    if (planet?.films[0]) {
      fetch(planet.films[0])
        .then((res) => res.json())
        .then((data) => {
          setFirstFilm(data.title);
        });
    }
  }, [planet]);

  return (
    <li>
      {planet.name} - First Film {firstFilm}
    </li>
  );
}

export default PlanetsListItem;
