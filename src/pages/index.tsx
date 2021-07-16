import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Florianópolis',
            slug: 'florianopolis',
            location: {
              latitude: 0,
              longitude: 0
            }
          },
          {
            id: '2',
            name: 'São Paulo',
            slug: 'sao_paulo',
            location: {
              latitude: -30,
              longitude: -50
            }
          }
        ]}
      />
    </>
  )
}
