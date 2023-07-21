import React from 'react'
import { useSelector } from 'react-redux'
import filterFunction from '../util/filterFunction'
// utils
import { formatPrice, removeComma } from '../util/formatPrice'

function CarValue() {
  const totalCost = useSelector(({ cars: { list, searchTerm } }) =>
    filterFunction(list, searchTerm).reduce((acc, car) => acc + car.cost, 0)
  )
  return (
    <div className='car-value'>
      Total Cost: NZD <b>{formatPrice(totalCost)}</b>
    </div>
  )
}

export default CarValue
