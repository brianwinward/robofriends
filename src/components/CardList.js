import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} {...user} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;