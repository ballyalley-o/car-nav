import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../../store/slices/car-slice'
import { AiFillCloseCircle } from 'react-icons/ai'
// styles
import { StyledDangerButton } from '../../assets/styles/car-form-styles'
// utils
import { formatPrice } from '../util/formatPrice'

function CarList() {
  const cars = useSelector(({ cars: { list, searchTerm } }) =>
    list.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
  const dispatch = useDispatch()

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car))
  }

  const renderedCars = cars?.map((car) => {
    return (
      <div key={car.id} className='panel'>
        <p>
          {car.name} - NZD <b>{formatPrice(car.cost)}</b>
        </p>
        <button
          className={StyledDangerButton}
          onClick={() => handleDeleteCar(car)}
        >
          <AiFillCloseCircle />
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList
