import React from 'react';
import { Badge } from '../Badge';
import { primary } from '../Badge.stories';

const CardFooter = ({ footerTitle, count }) => {
    return (
        <div className='card__footer'>
            <span className='card__footer-title'>{footerTitle}</span>
            <span className='card__footer-count'>{count}</span>
            <Badge variant={primary}/>
        </div>
    )
};
export default CardFooter;