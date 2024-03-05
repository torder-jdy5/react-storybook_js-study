import React from 'react';
import PropTypes from 'prop-types';
import './css/tdds.css';
import './btn.css';


/* Primary UI component for user interaction */
export const btn = ({ innerText, style, size, disabled, ...props }) => {
  const mode = disabled ? true : false;
  return (
    <button
      type="button"
      className={['btn', `btn__${size}`,`btn__${style}`, ].join(' ')}
      {...props}
      disabled={mode}
    >
      {innerText}
    </button>
)}; 

/* .join(' ')은 클레스 네임에 띄어쓰기를 추가하라 */

btn.propTypes = {
  /**
   * 버튼 내용
   */
  innerText: PropTypes.string.isRequired,
  /**
   * 버튼의 스타일을 나타냅니다.
   * 버튼 배경에 적용된 색상으로 버튼의 용도를 구분할 수 있습니다.
   */
  style: PropTypes.oneOf(['primary','tonal','outline']),
  /**
   * 버튼의 크기를 나타냅니다. 현재는 md(medium), sm(small) 세가지 사이즈가 있습니다.
   */
  size: PropTypes.oneOf(['md', 'sm']),
    /**
   * 버튼 비활성화 상태
   */
    disabled: PropTypes.bool,
  /**
   * 클릭 액션
   */
  onClick: PropTypes.func,

};



btn.defaultProps = {
  innerText: 'text',
  style: 'primary',
  size: 'md',
  disabled: false,
  onClick: undefined,
};
