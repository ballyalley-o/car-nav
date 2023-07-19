import React from 'react'
// redux-hooks
import { useDispatch, useSelector } from 'react-redux'
// store
import { changeName, changeCost, addCar } from '../../store'
// constants
import { FORMLABELS, TITLES, BUTTONS, SNACKS } from '../../constants/form'
// styles
import {
  StyledButton,
  StyledAddCarLabel,
  StyledCarFormDiv,
  StyledField,
  toastOptions,
} from '../../assets/styles/car-form-styles'
// components
import FormField from '../Form/FormField'
import { toast } from 'react-toastify'

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

    if (!name || !cost) {
      toast.error(SNACKS.ERROR)
      return
    }
    dispatch(addCar({ name, cost }))
    toast.success(SNACKS.SUCCESS)
    dispatch(changeName(''))
    dispatch(changeCost(0))
  }
  return (
    <div className={StyledCarFormDiv}>
      <h4 className={StyledAddCarLabel}>{TITLES.ADD_CAR}</h4>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <FormField
          label={FORMLABELS.NAME.label}
          value={name}
          onChange={handleChangeName}
        />

        {/* cost */}
        <FormField
          label={FORMLABELS.COST.label}
          value={cost || ''}
          onChange={handleChangeCost}
        />

        <div className={StyledField}>
          <button type='submit' className={StyledButton}>
            {BUTTONS.SUBMIT}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
