import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { CarSearch, CarForm, CarList, CarValue } from './components/Car'
// styles
import { toastOptions } from './assets/styles/car-form-styles'
// components
import Meta from './components/_def/Meta'
import Container from './components/_def/Container'
import Branding from './components/_def/Branding'
// toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <HelmetProvider>
        <Meta />
        <Container>
          <Branding />
          <CarForm />
          <CarSearch />
          <CarList />
          <CarValue />
        </Container>
        <ToastContainer {...toastOptions} />
      </HelmetProvider>
    </>
  )
}

export default App
