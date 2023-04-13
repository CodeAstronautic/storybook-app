import { storiesOf } from '@storybook/react';
import { Button } from './Button';
 import {text,boolean} from '@storybook/addon-knobs'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Quote Block (49)',
  component: Button,
  // tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BrandA = {
  args: {
    primary: true,
    label: 'BUY TICKET',
    
  },
};

export const BrandB = {
  args: {
    label: 'BUY TICKET',
  },
};

// export const Knobs = ()=>(
//   <Button variantColor='blue'
//   disabled={boolean('Disabled',false)}>
//       {text('BackgroundColor','color')}
     
//   </Button>
// )

// storiesOf("storybook", module)
// .addDecorator(withknobs)

// .add("BrandA",()=>(
//   <button 
//   disabled={boolean("disabled", false)}
//   style={{backgroundColor: color("color","red") }}
//   >
// {text("label","hiiii")}
//   </button>
// ) )