import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { LoremIpsum, } from 'react-lorem-ipsum';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <h1>POSSIT ETIMAM</h1>
          <p>Morbi eget efficitur nunc.</p>
        </div>

        <div className='text'>
          <div>
            <LoremIpsum avgWordsPerSentence={5} />

            <button
              type="button"
              className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
              {label}
            </button>

            <button
              type="button"
              className={['storybook-button-2', `storybook-button--${size}`, mode].join(' ')}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
              {label}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
