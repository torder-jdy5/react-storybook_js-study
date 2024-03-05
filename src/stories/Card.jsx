import React from 'react';
import PropTypes from 'prop-types';
import './card/card.scss';
import CardHeader from './card/CardHeader';
import CardContent from './card/CardContent';
import CardFooter from './card/CardFooter';
/**
 * Primary UI component for user interaction
 */
export const Card = ({ variant, boxHeight, title, subTitle, footerTitle, iconUp }) => {
  return (
      <div 
        className={['card', `card--${variant}`].join(' ')}
        style={{ height: boxHeight + 'px' }} // variant 디폴트 값 다르게 할 코드는,,,?
      >
          <CardHeader 
            title={title} 
            subTitle={subTitle}
          />
          <CardContent />
          <CardFooter 
            footerTitle={footerTitle}
          />
      </div>
  );
};
Card.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'info']),
  boxHeight: PropTypes.number,

  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  footerTitle: PropTypes.string,
};

Card.defaultProps = {
  variant: 'primary',
  boxHeight: 220,
  title: '타이틀',
  footerTitle: '전월대비',
};