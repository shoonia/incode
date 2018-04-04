import React from 'react';

import Card from './Card';

const CardsList = ({clients, onClick}) => {
  return clients.map((item, i) => {
    return <Card
        key={i}
        general={item.general}
        job={item.job}
        onClick={() => onClick(item)}
    />
  });
}

export default CardsList;
