import type { Meta, StoryObj } from '@storybook/react';
import { PlaceInfo } from './component';
import { GeoObject } from '../../types/GeoObject';


const meta = {
  title: 'events-world-app/place-info',
  component: PlaceInfo
} satisfies Meta<typeof PlaceInfo>;

export default meta;
type Story = StoryObj<typeof meta>;


const geocode: GeoObject = {
  name: 'Ча-Салтэн',
  description: 'Равалпинди, провинция Пенджаб, Пакистан',
  latitude:	33.62334,
  longitude: 73.075855 
}

export const Empty: Story = { 
  args: {
    props: undefined
  },
}

export const FindedPlace: Story = {
  args: {
    props: geocode
  },
}