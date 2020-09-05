import { render } from '@testing-library/react'
import { Component } from '../src/component'
import React from 'react'

test('Component is rendered', () => {
  const { getByText } = render(<Component />)
  expect(getByText('Component is rendered')).toBeInTheDocument()
})

test('Children is displayed', () => {
  const children = 'the children text is displayed.'
  const { getByText } = render(<Component>{children}</Component>)
  expect(getByText(children)).toBeInTheDocument()
})
