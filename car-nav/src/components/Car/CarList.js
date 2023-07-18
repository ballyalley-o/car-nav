import React from 'react'
import { useSelector } from 'react-redux'

function CarList() {
  const { cars } = useSelector((state) => state.cars.cars)
  console.log(cars)
  return <>CarList</>
}

export default CarList
