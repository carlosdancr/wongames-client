import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: '/img/games/cyberpunk-1.jpg',
    title: 'Cyberpunk 2077',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/mastercard.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
