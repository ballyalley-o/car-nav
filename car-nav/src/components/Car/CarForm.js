import React from 'react'
// redux-hooks
import { useDispatch, useSelector } from 'react-redux'
// store
import { changeName, changeCost, addCar } from '../../store'
// constants
import { FORMLABELS, TITLES, BUTTONS } from '../../constants/form'

function CarForm() {
  const { name, cost } = useSelector((state) => state.form)

  const dispatch = useDispatch()

  const handleChangeName = (e) => {
    e.preventDefault()
    dispatch(changeName(e.target.value))
  }

  const handleChangeCost = (e) => {
    e.preventDefault()
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCar({ name, cost }))
  }
  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>{TITLES.ADD_CAR}</h4>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className='field-group'>
          <div className='field'>
            <label htmlFor='' className='label'>
              {FORMLABELS.NAME.label}
            </label>
            <input
              type='text'
              className='input is-expanded'
              value={name}
              onChange={handleChangeName}
            />
          </div>
        </div>

        {/* cost */}
        <div className='field-group'>
          <div className='field'>
            <label htmlFor='' className='label'>
              {FORMLABELS.COST.label}
            </label>
            <input
              type='number'
              className='input is-expanded'
              value={cost || ''}
              onChange={handleChangeCost}
            />
          </div>
        </div>
        <div className='field'>
          <button className='is-link'>{BUTTONS.SUBMIT}</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
