import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ph-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    src: 'https://github.com/phpaulohenrique.png',
    alt: 'Paulo Henrique',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
