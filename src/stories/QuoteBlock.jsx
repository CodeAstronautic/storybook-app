import React from 'react';
import PropTypes from 'prop-types';
import './quoteblock.css';
import { boolean, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

//  Primary UI component for user interaction

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode2 = primary ? 'storybook-button--primary2' : 'storybook-button--secondary2';
  const mode3 = primary ? 'storybook-button--primary3' : 'storybook-button--secondary3';
  return (
    <>
      {/* <div className="quoteblock"> */}
      <div className="wrapper" style={{backgroundColor: color("background Color","backgroundColor") }} >
        <div className="heading">
          <h1
            className={[mode3]}
          > POSSIT ETIMAM</h1>
          <p>Morbi eget efficitur nunc.</p>

          <div className={[mode3]}
            style={{ width: '95px' }}
             hidden={boolean('Hide Underline', false)}>
            <hr />
          </div>
          
        </div>

        <div className='text'>
          <p style={{
            backgroundColor: color("Background Color", "backgroundColor"),
            color: color("TextBox Text Color", "Color")
          }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu ullamcorper urna potenti odio. Placerat tellus tempor sapien rhoncus tincidunt? Montes varius laoreet. Viverra nisi diam mus sodales congue pretium. Montes euismod ultrices suspendisse velit!</p>
          {/* <LoremIpsum avgWordsPerSentence={5} /> */}

          <button type="button"
            onClick={action('Clicked')}
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            {...props}
          // style={{backgroundColor: color("Button Color","backgroundColor") }}    
          >
            {/* {text('Label', `${label}`)} */}
            {label}
          </button>

          <button type="button"
            onClick={action('Clicked')}
            className={['storybook-button-2', `storybook-button--${size}`, mode2].join(' ')}
            // style={backgroundColor && { backgroundColor }}     ----//control addon
            {...props}
          >
            {label}
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
};
