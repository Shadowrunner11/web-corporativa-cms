import HeroContainer from '@/containers/HeroContainer'
import { PromotionsContainer } from '@/containers/PromotionsContainer'

export default function Home() {
  return (
    <main>
      <HeroContainer /> 
      <PromotionsContainer
        cards={[
          {
            contentText: 'Hola',
            headerTitle: 'Holaaaaa',
            href: '#',
            imgURL: '#',
            linkText: 'Hola'
          },
          {
            contentText: 'Hola',
            headerTitle: 'Holaaaaa',
            href: '#',
            imgURL: '#',
            linkText: 'Hola'
          },
          {
            contentText: 'Hola',
            headerTitle: 'Holaaaaa',
            href: '#',
            imgURL: '#',
            linkText: 'Hola'
          }
        ]} 
        bolderText='!Aprovecha las promociones'
        normalText='solo por pocos dias!'
      /> 
    </main>
  )
}
