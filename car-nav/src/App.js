import React from 'react'
import { CarSearch, CarForm, CarList, CarValue } from './components/Car'
// styles
import { toastOptions } from './assets/styles/car-form-styles'
// components
import Container from './components/_def/Container'
import Branding from './components/_def/Branding'
// toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Container>
        <Branding />
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </Container>
      <ToastContainer {...toastOptions} />
    </>
  )
}

export default App
