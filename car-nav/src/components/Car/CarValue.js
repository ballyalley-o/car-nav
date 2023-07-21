import React from 'react'
import { useSelector } from 'react-redux'
// utils
import { formatPrice, removeComma } from '../util/formatPrice'

function CarValue() {
  const totalCost = useSelector(({ cars: { list, searchTerm } }) => {
    const filteredCars = list?.filter((car) =>
      car?.name.toLowerCase().includes(searchTerm?.toLowerCase())
    )

    console.log('car.cost', filteredCars)
    let cost = 0
    for (let i = 0; i < filteredCars?.length; i++) {
      cost += filteredCars[i]?.cost
    }
    console.log('1', filteredCars?.length)
    return cost
  })

  // remove the commas from the number
  return (
    <div className='car-value'>
      Total Cost: NZD <b>{formatPrice(totalCost)}</b>
    </div>
  )
}

export default CarValue
