import React from 'react';

const CardHeader = ({ title, subTitle }) => {
    return (
        <div className='card__header'>
            <h3 className='card__title'>{title}</h3>
            {
                subTitle ? <span className='card__subtitle'>{subTitle}</span> : null
            }
        </div>
    )
};

export default CardHeader;