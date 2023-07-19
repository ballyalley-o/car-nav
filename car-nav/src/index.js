// styles
import 'bulma/css/bulma.min.css'
import './assets/css/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
// redux
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'

const el = document.getElementById('root')
const root = createRoot(el)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
