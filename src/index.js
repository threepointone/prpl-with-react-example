import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import { BrowserRouter } from 'react-router'

render(<BrowserRouter><App/></BrowserRouter>, window.app)
