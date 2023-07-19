import React from 'react'
import { CarSearch, CarForm, CarList, CarValue } from './components/Car'
// components
import Container from './components/_def/Container'
import Branding from './components/_def/Branding'

function App() {
  return (
    <Container>
      <Branding />
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </Container>
  )
}

export default App
