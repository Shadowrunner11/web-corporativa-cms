import type { Meta, StoryObj } from '@storybook/react';
import { AlertStrip } from 'ui-material';

const meta = {
  title: 'Molecules/Alert strip',
  component: AlertStrip,
  parameters: {
    layout: 'centered'
  },
  
} satisfies Meta<typeof AlertStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    sx:{border: '1px solid gray', borderRadius: 1},
    children: "Bareto",
    headerContent:"Hola"
  }
}
