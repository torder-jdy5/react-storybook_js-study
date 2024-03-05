import {React, useState} from 'react';
import PropTypes from 'prop-types';
import './tabs.css';


export const Tabs = ({primary, label, disabled }) => {
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 
  const [currentTab, setTab] = useState(0);
  const type = primary ? 'line' : 'contained';
  const TabList = [
    { content: 'panel 01', disabled: false },
    { content: 'panel 02', disabled: false },
    { content: 'panel 03', disabled: false },
    { content: 'panel 04', disabled: false },
    { content: 'panel 05', disabled: true },
  ];
  const selectMenu = (index) => {
    setTab(index);
  };
  return (
      <div className={['tabs',`tabs--${type}`].join(' ')}>
        <div className='tabs__list'>
          {TabList.map( (tap, index) => {
            return (
              <button
                type="button"
                key = {index}
                disabled = {tap.disabled}
                className = {[currentTab === index ? "tabs__item tabs__item--selected" : "tabs__item"].join('')}
                onClick = {() => selectMenu(index)}
              >
                {label}
              </button>
            )
          })}
        </div>
        <div className='tabs__panel'>
        {
          type === 'line'
          &&
          <div className='tabs__panel__item'>
            <p className='tabs__panel__item-title'>{TabList[currentTab].content}</p>
          </div>
        }
        </div>
      </div>
  );
};
Tabs.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};

Tabs.defaultProps = {
  primary: false,
  onClick: undefined,
  disabled: false,
};
