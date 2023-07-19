import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai'
import { removeCar } from '../../store/slices/car-slice'
// styles
import { StyledDangerButton } from '../../assets/styles/car-form-styles'

function CarList() {
  const cars = useSelector((state) => state.cars.list)
  const dispatch = useDispatch()

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car))
  }

  const renderedCars = cars.map((car) => {
    return (
      <div key={cars.id} className='panel'>
        <p>
          {car.name} - NZD {car.cost}
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
