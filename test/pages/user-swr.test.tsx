import React from 'react'
import { render } from '../testUtils'
import { User } from '../../src/pages/users-swr'

describe('User swr page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<User />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
