import React from 'react'
import { render } from '../testUtils'
import { User } from '../../src/pages/users-ssr'

describe('User ssr page', () => {
  it('matches snapshot', () => {
    const data = []
    const { asFragment } = render(<User users={data} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
