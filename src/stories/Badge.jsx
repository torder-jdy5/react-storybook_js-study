import React from 'react';
import PropTypes from 'prop-types';
import './badge/badge.scss'
import iconUp from './assets/icon--iconUp.svg';
import iconDown from './assets/icon--iconDown.svg';
/**
 * Primary UI component for user interaction
 */
export const Badge = ({ badgeVariant, badgeStatus, badgeIcon, badgeAmount, badgeCase, badgeUnit, ...props}) => {
  return (
    <div 
      className={['badge', `badge--${badgeVariant}`, `badge--${badgeStatus}`].join(' ')}
      {...props}
    >
      {
        badgeIcon ? <i 
        className={['icon',`icon--${badgeIcon}`].join(' ')}
        style={{backgroundImage:'url()'}}
        /> : null
      }
      <span className='badge__amount'>{badgeAmount}</span>
      <span className='badge__unit'><span>{badgeCase}</span>{badgeUnit}</span>
    </div>
  );
};


Badge.propTypes = {
  badgeVariant: PropTypes.oneOf(['primary', 'secondary']),
  badgeStatus: PropTypes.oneOf(['status-up', 'status-down', 'status-none ']),
  badgeIcon: PropTypes.oneOf(['iconUp', 'iconDown']),
  badgeAmount: PropTypes.string,
  badgeCase: PropTypes.string,
  badgeUnit: PropTypes.string,
};

Badge.defaultProps = {
  badgeVariant: 'primary',
  badgeStatus: 'status-up',
  badgeIcon: 'iconUp',
  badgeAmount: 100,
  badgeUnit: '%'
};