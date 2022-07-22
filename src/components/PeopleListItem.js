import { useEffect, useState } from 'react';

function PeopleListItem({ person }) {
  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    if (person?.homeworld) {
      fetch(person.homeworld)
        .then((res) => res.json())
        .then((data) => {
          setHomeworld(data.name);
        });
    }
  }, [person]);

  return (
    <ul>
      <li>
        {person.name} - Homeworld: {homeworld}
      </li>
    </ul>
  );
}

export default PeopleListItem;
