import React from 'react'
import { render } from '../testUtils'
import { User } from '../../src/pages/users-sp'

describe('User sp page', () => {
  it('matches snapshot', () => {
    const data = []
    const { asFragment } = render(<User users={data} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
