import Cart, { CartProps } from 'templates/Cart'

import mockItems from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: mockItems,
      total: 'R$ 330,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}
