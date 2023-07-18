import { configureStore } from '@reduxjs/toolkit'
import {
  carReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from './slices/car-slice'
import { formReducer, changeCost, changeName } from './slices/form-slice'

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
})

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar }
