import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './component';
import { withRouter} from "storybook-addon-react-router-v6";
import {store} from "../../store/store";
import { Provider } from 'react-redux';

const meta = {
  title: 'events-world-app/navbar',
  component: Navigation,
  decorators: [withRouter, (Story) => <Provider store={store}><Story /></Provider>],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  render: function() {
    localStorage.setItem('auth', 'true')
    return <Navigation />
  }
};

export const LoggedOut: Story = {
  render: function() {
    localStorage.removeItem('auth')
    return <Navigation />
  }
};
