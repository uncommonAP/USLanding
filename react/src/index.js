import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './containers/LandingPage'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LandingPage />,
    document.getElementById('app')
  )
})
