import React from 'react';
import PropTypes from 'prop-types';
import './quoteblock.css';
import { LoremIpsum, } from 'react-lorem-ipsum';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode2 = primary ? 'storybook-button--primary2' : 'storybook-button--secondary2';
  const mode3 = primary ? 'storybook-button--primary3' : 'storybook-button--secondary3';
  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <h1
            className={[mode3]}
          > POSSIT ETIMAM</h1>
          <p>Morbi eget efficitur nunc.</p>

          <div className={[mode3]}
          style={{ width: '95px'}}>
            <hr/>
            </div>
        </div>

        <div className='text'>
          {/* <div> */}
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu ullamcorper urna potenti odio. Placerat tellus tempor sapien rhoncus tincidunt? Montes varius laoreet. Viverra nisi diam mus sodales congue pretium. Montes euismod ultrices suspendisse velit!</p>
            {/* <LoremIpsum avgWordsPerSentence={5} /> */}

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
              className={['storybook-button-2', `storybook-button--${size}`, mode2].join(' ')}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
              {label}
            </button>
          {/* </div> */}
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
