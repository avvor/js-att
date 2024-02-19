import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './component';


const meta = {
  title: 'events-world-app/input-text',
  component: InputText
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { 
  args: { 
    type: 'text', 
    placeholder: 'Поле для ввода чего-нибудь',
  }
}