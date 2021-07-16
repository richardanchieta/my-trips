import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with marker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'Florianópolis',
      slug: 'florianopolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao_paulo',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[placeOne, placeTwo]} />)
    expect(screen.getByTitle(/florianópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
  })
})
