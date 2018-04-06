import React from 'react';

import Card from './Card';

const CardList = ({clients, onClick}) => {
  return clients.map((item, i) => {
    return <Card
        key={item.contact.email}
        general={item.general}
        job={item.job}
        onClick={() => onClick(item)}
    />
  });
}

export default CardList;
